const faker = require('faker');

class Empresa {
  constructor(){
    this.carne = faker.datatype.uuid();
    this.name = faker.name.firstName();
    this.hablaA = {
      "calle": faker.address.streetName(),
      "ciudad": faker.address.cityName(),
      "estado": faker.address.state(),
      "codigoPostal": faker.address.zipCode(),
      "pais": faker.address.country()
    }
  }
}

//console.log(new Empresa())
module.exports = Empresa;