//Static Properties
class MyClass {
  static staticMethod() {
    console.log(this);
  }
}

MyClass.staticMethod()

class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }
  static isValidEmail(email) {
    return email.includes("@") && email.includes(".");
  }
  static  createUser(UserName) {
    return new User(UserName, `${UserName}@email.com`)
  }
  greet() {
    console.log(`hi, I'm ${this.name}`);
  }
}

const user = new User ('willams', 'wills23@gmail.com')

user.greet()

console.log(User.isValidEmail("sfhsdkhf"));


const user2 = User.createUser('prince')
user2.greet()


