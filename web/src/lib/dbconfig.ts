import {
  AZURE_SQL_SERVER,
  AZURE_SQL_DATABASE,
  AZURE_SQL_PORT,
  AZURE_SQL_USER,
  AZURE_SQL_PASS
} from '$env/static/private'

const server = AZURE_SQL_SERVER;
const database = AZURE_SQL_DATABASE;
const port = parseInt(AZURE_SQL_PORT);
const user = AZURE_SQL_USER;
const password = AZURE_SQL_PASS;

export const config = {
  user: user,
  password: password,
  server: server,
  port: port,
  database: database,
  authentication: {
    type: 'default'
  },
  options: {
    encrypt: true
  }
};