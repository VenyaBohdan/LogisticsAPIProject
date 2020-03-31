const DATABASE_CONFIG = {
  host: 'localhost',
  port: 5432,
  user: 'venya',
  password: 'root',
  database: 'apidatabase'
}

function INSERT_USER_QUERY(values) {
  return "insert into users (login, password) values ('" + values.join("\', \'") + "')";
}

const GET_USERS_QUERY = "select * from users";

module.exports = {
  DATABASE_CONFIG,
  INSERT_USER_QUERY,
  GET_USERS_QUERY
}
