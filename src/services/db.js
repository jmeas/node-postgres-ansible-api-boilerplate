import bluebird from 'bluebird';
import pgp from 'pg-promise';
import monitor from 'pg-monitor';

import config from '../../config';

const options = {
  promiseLib: bluebird
};

if (config.debug) {
  monitor.attach(options);
  monitor.setTheme('matrix');
}

const db = pgp(options);

export default db(config.db);
