const fs = require('fs');
const path = require('path');
const url = require('url');

const seedMutations = (mutations) => `mutation { ${mutations} }`;

const parseCompanyFoundedDate = (date) => new Date(date).toISOString();

const parseCompanyURL = (companyURL) => {
  if (!companyURL) {
    return '';
  }
  return url.parse(companyURL).href;
};

const parseCompanyTargetMarkets = (type) => {
  if (type === 'Individuals') {
    return { name: 'INDIVIDUALS' };
  } else if (type === 'Service Providers') {
    return { name: 'SERVICE_PROVIDERS' };
  } else if (type === 'Companies') {
    return { name: 'COMPANIES' };
  } else {
    return { name: 'UNKNOWN' };
  }
};

const parseCompanyCategories = (category) => {
  const categories = [];
  let cat = category;

  if (cat.endsWith(' -')) {
    cat = cat.slice(-2);
  }

  cat = cat
    .replace(/ - {1,2}/, '::')
    .split(/ /)
    .join('_')
    .toUpperCase();

  const result = cat
    .split('::')
    .filter((item) => item !== '_-')
    .map((item) => ({
      name: item,
    }));

  return result || [];
};

const mapCompanyType = (type) => {
  if (type === 'Legal Service Using Tech') {
    return { name: 'EXTENDER' };
  } else if (type === 'Legal Tech') {
    return { name: 'DEVELOPER' };
  } else {
    return { name: 'UNKNOWN' };
  }
};

const exportSeedMutations = (mutationString) => {
  const dest = path.resolve(__dirname, '../seed/seed.graphql');
  const data = seedMutations(mutationString);
  fs.unlink(dest, (err) => {
    fs.appendFile(dest, data, (err) => {
      if (err) throw err;
      console.log(`The data has been written to disk`);
    });
  });
};

module.exports = {
  mapCompanyType,
  parseCompanyCategories,
  parseCompanyFoundedDate,
  parseCompanyTargetMarkets,
  parseCompanyURL,
  seedMutations,
  exportSeedMutations,
};
