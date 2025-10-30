import sql from "k6/x/sql";
import driver from "k6/x/sql/driver/sqlserver";
import { Faker } from "k6/x/faker"
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.2/index.js";

const db = sql.open(driver, '#{databaseTestsConnection}#');
const faker = new Faker()

export function teardown() {
  db.close();
}

export default function () {
  const productName = faker.product.productName();
  const productUpc = faker.product.productUpc();
  db.exec(`INSERT INTO dbo.Products (Name, Upc) ` +
    `VALUES('${productName}', '${productUpc}');`);
}

export function handleSummary(data) {
  return {
    "db-loadtests.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true })
  };
}