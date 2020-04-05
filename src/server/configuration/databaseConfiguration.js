const DATABASE_CONFIG = {
  host: 'localhost',
  port: 5432,
  user: 'venya',
  password: 'root',
  database: 'apidatabase'
}

function INSERT_USER_QUERY(values) {
  return "insert into users (login, password) values ('"
    + values.join("\', \'") + "')";
}

const GET_USERS_QUERY = "select * from users";

function INSERT_CARRIER_ATI(values) {
  return "insert into carrier_ati ('filling_place', 'dumping_place',"
  + " 'transport_type', 'date', 'cargo_type', 'is_cash', 'has_price',"
  + " 'weight', 'cubage') values ('" + values.join("\', \'") + "')";
}

function INSERT_CUSTOMER_ATI(values) {
  return "insert into customer_ati ('filling_place', 'dumping_place',"
  + " 'transport_type', has_price', 'weight', 'cubage') values ('"
  + values.join("\', \'") + "')";
}

function GET_CARRIER_ATI(values) {
  return "select " + values.join(", ") + "from carrier_ati";
}

function GET_CUSTOMER_ATI(values) {
  return "select " + values.join(", ") + "from customer_ati";
}

function INSERT_CARRIER_DELLA(values) {
  return "insert into carrier_della ('filling_place', 'dumping_place',"
  + " 'transport_type', 'date', 'cargo_type', 'is_cash', 'has_price',"
  + " 'weight', 'cubage') values ('" + values.join("\', \'") + "')";
}

function INSERT_CUSTOMER_DELLA(values) {
  return "insert into customer_della ('filling_place', 'dumping_place',"
  + " 'transport_type', has_price', 'weight', 'cubage') values ('"
  + values.join("\', \'") + "')";
}

function GET_CARRIER_DELLA(values) {
  return "select " + values.join(", ") + "from carrier_della";
}

function GET_CUSTOMER_DELLA(values) {
  return "select " + values.join(", ") + "from customer_della";
}

function INSERT_CARRIER_LARDI(values) {
  return "insert into carrier_lardi ('filling_place', 'dumping_place',"
  + " 'transport_type', 'date', 'cargo_type', 'is_cash', 'has_price',"
  + " 'weight', 'cubage') values ('" + values.join("\', \'") + "')";
}

function INSERT_CUSTOMER_LARDI(values) {
  return "insert into customer_lardi ('filling_place', 'dumping_place',"
  + " 'transport_type', has_price', 'weight', 'cubage') values ('"
  + values.join("\', \'") + "')";
}

function GET_CARRIER_LARDI(values) {
  return "select " + values.join(", ") + "from carrier_lardi";
}

function GET_CUSTOMER_LARDI(values) {
  return "select " + values.join(", ") + "from customer_lardi";
}

module.exports = {
  DATABASE_CONFIG,
  INSERT_USER_QUERY,
  GET_USERS_QUERY,
  INSERT_CARRIER_ATI,
  INSERT_CUSTOMER_ATI,
  GET_CARRIER_ATI,
  GET_CUSTOMER_ATI,
  INSERT_CARRIER_DELLA,
  INSERT_CUSTOMER_DELLA,
  GET_CARRIER_DELLA,
  GET_CUSTOMER_DELLA,
  INSERT_CARRIER_LARDI,
  INSERT_CUSTOMER_LARDI,
  GET_CARRIER_LARDI,
  GET_CUSTOMER_LARDI
}
