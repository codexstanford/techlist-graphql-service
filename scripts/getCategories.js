require('dotenv').config();
const path = require('path');
const _ = require('lodash');
const gql = require('graphql-tag');
const csv = require('csvtojson/v2');
const fetch = require('node-fetch');
const { createHttpLink } = require('apollo-link-http');
const { execute, makePromise } = require('apollo-link');

const csvFilePath = path.resolve(__dirname, '../seed/companies.csv');
const link = createHttpLink({ uri: `${process.env.PRISMA_ENDPOINT}`, fetch });

const mapCompanyType = (type) => {
  if (type === 'Legal Service Using Tech') {
    return `EXTENDER`;
  } else if (type === 'Legal Tech') {
    return 'DEVELOPER';
  } else {
    return 'UNKNOWN';
  }
};

const parseCompanyTargetMarkets = (type) => {
  if (type === 'Individuals') {
    return `INDIVIDUALS`;
  } else if (type === 'Service Providers') {
    return 'SERVICE_PROVIDERS';
  } else if (type === 'Companies') {
    return 'COMPANIES';
  } else {
    return 'UNKNOWN';
  }
};

csv()
  .fromFile(csvFilePath)
  .then((json) => {
    const categories = [];
    let targetMarkets = [];
    let businessModels = [];

    for (const company in json) {
      let catString = json[company].category;
      targetMarkets.push(
        parseCompanyTargetMarkets(json[company].target_client),
      );
      businessModels.push(mapCompanyType(json[company].business_model));
      if (catString.endsWith(' -')) {
        catString = catString.slice(-2);
      }
      catString = catString
        .replace(/ - {1,2}/, '::')
        .split(/ /)
        .join('_')
        .toUpperCase();
      categories.push(catString);
    }
    const result = Array.from(new Set(categories));
    targetMarkets = Array.from(new Set(targetMarkets));
    businessModels = _.flatten(Array.from(new Set(businessModels)));

    businessModels.forEach((model) => {
      const operation = {
        query: gql`
          mutation CreateCompanyBusinessModel(
            $data: CompanyBusinessModelCreateInput!
          ) {
            createCompanyBusinessModel(data: $data) {
              id
              name
            }
          }
        `,
        variables: { data: { name: model } },
      };
      makePromise(execute(link, operation))
        .then((data) => console.log(data))
        .catch((error) => console.log(`ERROR:`, error));
    });

    targetMarkets.forEach((market) => {
      const operation = {
        query: gql`
          mutation CreateCompanyTargetMarket(
            $data: CompanyTargetMarketCreateInput!
          ) {
            createCompanyTargetMarket(data: $data) {
              id
              name
            }
          }
        `,
        variables: { data: { name: market } },
      };
      makePromise(execute(link, operation))
        .then((data) => console.log(data))
        .catch((error) => console.log(`ERROR:`, error));
    });

    const arr = result.map((item) => {
      const t = item.split('::');
      return t;
    });

    const flat = Array.from(new Set(_.flatten(arr)));

    flat.forEach((item) => {
      const operation = {
        query: gql`
          mutation CreateCompanyCategory($data: CompanyCategoryCreateInput!) {
            createCompanyCategory(data: $data) {
              id
              name
            }
          }
        `,
        variables: { data: { name: item } },
      };
      makePromise(execute(link, operation))
        .then((data) => console.log(data))
        .catch((error) => console.log(`ERROR:`, error));
    });
  });
