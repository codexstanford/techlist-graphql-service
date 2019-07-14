require('dotenv').config();
import { run } from './server';

run();

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log('\nModule disposed. \n'));
}
