const express = require("express");
const { faker } = require("@faker-js/faker");
console.log(faker.datatype.uuid());
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User {
  constructor() {
    this.id = faker.random.numeric(6, { bannedDigits: ["0"] });
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNuber = faker.phone.number("+966 ## ### ####");
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this.id = faker.random.numeric(6, { bannedDigits: ["0"] });
    this.name = faker.company.companyName();
    this.address = {
      street: faker.address.street(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    };
  }
}

app.get("/api/users/new", (req, res) => {
  res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
  res.json(new Company());
});

app.get("/api/company", (req, res) => {
  const user = new User();
  const company = new Company();
  res.json({ company, user });
});

const server = app.listen(8000, () => {
  console.log(`ok, You are in port 8000`);
});
