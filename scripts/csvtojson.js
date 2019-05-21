require('dotenv').config();
const fs = require('fs');
const path = require('path');
const url = require('url');
const _ = require('lodash');
const gql = require('graphql-tag');
const { createHttpLink } = require('apollo-link-http');
const fetch = require('node-fetch');
const { execute, makePromise } = require('apollo-link');
const { askGoogleForLocation } = require('./getLocations');
const csv = require('csvtojson/v2');
const {
  mapCompanyType,
  parseCompanyCategories,
  parseCompanyFoundedDate,
  parseCompanyTargetMarkets,
  parseCompanyURL,
} = require('./helpers');

const LINK = createHttpLink({ uri: `${process.env.PRISMA_ENDPOINT}`, fetch });
const CSV_PATH = path.resolve(__dirname, process.env.CSV_PATH);

migrateCSVDataToPrisma();

async function migrateCSVDataToPrisma() {
  const json = await csv().fromFile(CSV_PATH);
  const cos = Object.keys(json);
  console.log('Total Items:', json.length);
  const temp = cos.slice(0, 100);

  for (const i in temp) {
    console.clear();
    console.log(`Migrating company ${i} of ${temp.length}`);
    const company = json[i];
    const location = await askGoogleForLocation(company);

    const operation = {
      query: gql`
        mutation CreateCompany($data: CompanyCreateInput!) {
          createCompany(data: $data) {
            id
          }
        }
      `,
      variables: {
        data: {
          name: company.name,
          yearFounded: parseCompanyFoundedDate(company.founded_date),
          location: {
            create: location,
          },
          description: company.description,
          visible: company.visible === 'TRUE' ? true : false,
          cats: {
            connect: parseCompanyCategories(company.category),
          },
          operatingModels: {
            connect: [mapCompanyType(company.businessModels)],
          },
          targetMarkets: {
            connect: [parseCompanyTargetMarkets(company.target_client)],
          },
          url: parseCompanyURL(company.main_url),
          twitter: parseCompanyURL(company.twitter_url),
          crunchbase: parseCompanyURL(company.crunchbase_url),
          angellist: parseCompanyURL(company.angellist_url),
          metadata: {
            create: {
              isDraft: false,
              isPublic: company.visible === 'TRUE' ? true : false,
            },
          },
          contact: {
            create: {
              urlWebsite: parseCompanyURL(company.main_url),
            },
          },
        },
      },
    };
    makePromise(execute(LINK, operation))
      .then(({ data, errors }) => {
        if (errors) {
          errors.forEach((e) => {
            console.error('ERROR:', e);
          });
          // console.log('OPERATION:', operation);
        }
      })
      .catch((error) => {
        console.error(`ERROR:`);
      });
  }
}
