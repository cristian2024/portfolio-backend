import { config } from "./config";

function getDbConnectionRoute(): string {
  return `mongodb://127.0.0.1:27017/${
    config().db.dbName
  }?directConnection=true&serverSelectionTimeoutMS=200`;
}


export { 
  getDbConnectionRoute
}