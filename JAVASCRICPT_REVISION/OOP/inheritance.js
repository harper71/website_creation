// Extending A class

class Human {
  species = "Homo Sapien";

  constructor(name, age) {
    this.age = age;
    this.name = name;
  }

  greet() {
    console.log(`Hi my name is ${this.name} i am ${this.age} years old`);
  }
  sleep() {
    console.log(`${this.name} is sleeping`);
  }
  eating(meal) {
    setTimeout(() => {
      console.log(`${this.name} is eating ${meal}`);
    }, 3000);
  }
}

class Student extends Human {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying...`);
  }
  greet() {
    console.log(
      `Hi i am ${this.name} i am ${this.age} years old in grade ${this.grade}`,
    );
  }
}

class Teacher extends Human {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  teach() {
    console.log(
      `hi my name is ${this.name} i am a teacher who teaches ${this.subject}`,
    );
  }
}
const alice = new Human("alice", 34);
const micheal = new Student("micheal", 14, 6);
const dorathy = new Teacher("dorathy", 40, "Mathematics");

alice.greet();

micheal.study();
micheal.greet();

dorathy.greet();
dorathy.teach();
