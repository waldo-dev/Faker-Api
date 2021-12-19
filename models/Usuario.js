const faker = require('faker');

class Usuario {
  constructor(){
    this.carne = faker.datatype.uuid();
    this.name = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.numero = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

//console.log(new Usuario())
module.exports = Usuario;