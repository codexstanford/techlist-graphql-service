import { exchangeCSVForJSON, writeJSONToDisk } from './csv';
import { askGoogleForLocation } from './google';
import { conformPropertyNames } from './helpers';
import {
  createCategory,
  createBusinessModel,
  createTargetMarket,
  createCompany,
} from './api';
const logger = require('./logger');

export default class Importer {
  constructor(params) {
    this.params = params;
    this.importStarted = Date.now();
    this.importCount = 0;
    this.initImport();
  }

  async initImport() {
    this.csv = await this.loadCSV();
    this.raw = this.conformRawData();
    this.categories = await this.parseCategories();
    this.businessModels = await this.parseBusinessModels();
    this.targetMarkets = await this.parseTargetMarkets();
    this.migrateCompanies();
  }

  async migrateCompanies() {
    const timeStart = Date.now();
    for (const index in this.raw) {
      const org = this.raw[index];
      const location = await askGoogleForLocation({
        name: org.name[0].payload,
        location: org.location,
      });
      const data = {
        name: { create: org.name.map((name) => ({ ...name })) },
        location: { create: { ...location } },
        logo: {
          create: org.logo.map((logo) => ({ ...logo, fromDate: new Date() })),
        },
        metadata: { create: { ...org.metadata } },
        links: {
          create: org.links.map((link) => ({ ...link, fromDate: new Date() })),
        },
        yearFounded: org.yearFounded,
        description: org.description,
        targetMarkets: {
          connect: org.targetMarkets.map((cat) => {
            return { id: this.targetMarkets[cat.payload].id };
          }),
        },
        categories: {
          connect: org.categories.map((cat) => ({
            id: this.categories[cat].id,
          })),
        },
        affiliation:
          org.affiliations.length > 0
            ? {
                create: org.affiliations.map((item) => {
                  return {
                    fromDate: item.name[0].fromDate,
                    metadata: {
                      create: { ...item.metadata } || {
                        isDraft: true,
                        isPublic: true,
                        isVerified: false,
                        isRejected: false,
                        isUnverified: true,
                        isApproved: false,
                        isPendingReview: true,
                      },
                    },
                    person: {
                      create: {
                        name: {
                          create: {
                            ...item.name[0],
                          },
                        },
                        email:
                          item.email.length > 0
                            ? {
                                create: {
                                  ...item.email[0],
                                },
                              }
                            : null,
                        metadata: {
                          create: {
                            isDraft: true,
                            isPublic: true,
                            isVerified: false,
                            isRejected: false,
                            isUnverified: true,
                            isApproved: false,
                            isPendingReview: true,
                          },
                        },
                      },
                    },
                  };
                }),
              }
            : null,
      };
      try {
        const result = await createCompany(data, logger);
        this.importCount = this.importCount + 1;
        const percentDone = this.importCount / this.raw.length;
        console.clear();
        console.log(`Total Records To Migrate: ${this.raw.length}`);
        console.log(`Total Done: ${this.importCount}`);
        console.log(`Percent Done: ${percentDone * 100}%`);
        console.log(
          `Time Elapsed: ${Math.abs(timeStart - Date.now()) / 1000} seconds`,
        );
        const secEl = Math.abs(timeStart - Date.now()) / 1000;
        console.log(`Migration Rate: ${this.importCount / secEl} per second`);
      } catch (err) {
        console.log('ERROR:', item.email);
      }
    }
  }

  async parseTargetMarkets() {
    const markets = [];
    logger.info({ message: 'Parsing Target Markets...' });

    this.raw
      .map((item) => item.targetMarkets)
      .forEach((market) => markets.push(...market));

    const result = markets
      .filter((item) => typeof item.payload !== 'undefined')
      .reduce((acc, cur) => [...acc, cur.payload], []);

    const uniqueMarkets = Array.from(new Set(result));
    const mapped = await this.migrateTargetMarkets(uniqueMarkets);
    return mapped;
  }

  async migrateTargetMarkets(cats) {
    let categoryMap = {};
    for (const cat of cats) {
      try {
        const result = await createTargetMarket(cat, logger);
        categoryMap = Object.assign({}, categoryMap, { ...result });
      } catch (err) {
        logger.log({
          level: 'error',
          message: err,
        });
      }
    }
    return categoryMap;
  }

  async parseBusinessModels() {
    const models = [];

    this.raw
      .map((item) => item.businessModels)
      .forEach((item) => models.push(...item));

    const result = models
      .filter((item) => typeof item.payload !== 'undefined')
      .reduce((acc, cur) => [...acc, cur.payload], []);
    const uniqueModels = Array.from(new Set(result));
    const mapped = await this.migrateBusinessModels(uniqueModels);
    return mapped;
  }

  async migrateBusinessModels(cats) {
    let categoryMap = {};
    for (const cat of cats) {
      try {
        const result = await createBusinessModel(cat, logger);
        categoryMap = Object.assign({}, categoryMap, { ...result });
      } catch (err) {
        logger.log({
          level: 'error',
          message: err,
        });
      }
    }
    return categoryMap;
  }

  async loadCSV() {
    const { pathToCSVFile } = this.params;
    try {
      return exchangeCSVForJSON({ pathToCSVFile });
    } catch (err) {
      logger.error({
        message: err,
      });
    }
  }

  conformRawData() {
    return conformPropertyNames(this.csv);
  }

  async parseCategories() {
    const cats = this.raw
      .map((item) => item.categories)
      .reduce((acc, cur) => [...acc, ...cur]);
    const uniqueCats = Array.from(new Set(cats));
    const mapped = await this.migrateCategories(uniqueCats);
    return mapped;
  }

  async migrateCategories(cats) {
    let categoryMap = {};
    for (const cat of cats) {
      try {
        const result = await createCategory(cat, logger);
        categoryMap = Object.assign({}, categoryMap, { ...result });
      } catch (err) {
        logger.log({
          level: 'error',
          message: err,
        });
      }
    }
    return categoryMap;
  }
}
