
// Execute raw SQL statement for GraphQL. (Can be re-generated.)
// eslint-disable-next-line no-unused-vars
const { cwd } = require('process');
// eslint-disable-next-line no-unused-vars
const { join } = require('path');
//!code: imports //!end
//!code: init //!end

//!code: main
let dialect, openDb, executeSql;
const sqlite = require('sqlite');
dialect = 'sqlite3';

openDb = () => {
  sqlite.open(join(cwd(), 'data', 'sqlite3.db'));
  return sqlite;
};

executeSql = sql => sqlite.all(sql)
  .catch(err => {
    console.log('executeSql error=', err.message); // eslint-disable-line no-console
    throw err;
  });
//!end

let moduleExports = {
  dialect,
  executeSql,
  openDb,
  //!code: moduleExports //!end
};

//!code: more //!end

//!code: exports //!end
module.exports = moduleExports;

//!code: funcs //!end
//!code: end //!end
