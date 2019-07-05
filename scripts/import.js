import Importer from './import/';
const path = require('path');

const params = {
  pathToCSVFile: path.resolve(__dirname, '../seed/companies.csv'),
  pathToHCompanyJsonFile: '../seed/companies.json',
};

async function main() {
  const importer = new Importer(params);
}

main();
