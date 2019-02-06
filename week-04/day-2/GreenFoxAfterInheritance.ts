'use strict';

class Person {
    name: string;
    age: number;
    gender: string;

    constructor (newName?, newAge?, newGender?) {           // Geri method, ? = optional, ! = in this case it means 'not provided'
            if (!newName && !newAge && !newGender) {
              this.name = "Jane Doe";
              this.age = 30;
              this.gender = "female";
            }
            else {
            this.name = newName;
            this.age = newAge;
            this.gender = newGender;
          }
         }

    public introduce() :any {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
    }     
          
    public getGoal() :any {
        console.log("My goal is: Live for the moment!");
    }
}

class Student extends Person {
  previousOrganization:string;
  skippedDays:number;

  constructor (
    n:string = 'Jane Doe',
    a:number = 30,
    g:string = 'female',
    pO:string = 'The School of Life',
    sD:number = 0
  ) {
    super(n, a, g);
    this.previousOrganization = pO;
    this.skippedDays = sD;
  }

  public getGoal() :any {
    console.log('Be a junior software developer.');
  }

  publicintroduce() :any {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  } 

  skipDays(numberOfDays) {
    this.skippedDays += numberOfDays;  
  }
}

/* const student1 = new Student('Bela',null,null,'testOrg', 3);
student1.getGoal();
console.log(student1); */  

class Mentor extends Person {
  level: string;

  constructor(
    n: string = 'Jane Doe',
    a: number = 30,
    g: string = 'female',
    l: string = 'intermediate'
  ) {
    super(n, a, g);
    this.level = l;
  }

  introduce() :any {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }

  getGoal() :any {
    console.log(`My goal is: Educate brilliant junior software developers.`);
  }
}

/* const mentor1 = new Mentor ('Jojo', 30, 'female', 'senior'); //EXAMPLE of how to call
console.log(mentor1);
mentor1.introduce();  */

class Sponsor extends Person {
  company: string;
  hiredStudents: number;

  constructor (
    n: string = 'Jane Doe',
    a: number = 30,
    g: string = 'female',
    c: string = 'Google',
    hS: number = 0
      ) {
        super(n, a, g);
        this.company = c;
        this.hiredStudents = hS;
      }
  
  introduce() :any {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }  

  getGoal() :any  {
    console.log("My goal is: hire brilliant junior software developers.");
  }

  hire(hiredStudents) :any {
    hiredStudents++;
  }
}

/* const sponsor1 = new Sponsor ('Petra', 30, 'female', 'Evosoft', 3); //EXAMPLE of how to call
console.log(sponsor1);
sponsor1.introduce(); */

class Cohort {
  name: string;
  students: Student [];
  mentors: Mentor [];
  constructor (newCohortName: string, newStudents: Student [] = [], newMentors: Mentor [] = []) {
    this.name = newCohortName;          // beside the given parameter, it sets students an mentors as empty list
    this.students = newStudents;
    this.mentors = newMentors;
  }

  addStudent (newStudent: Student) {    //adds the given Student to students list
    this.students.push(newStudent);
  }

  addMentor (newMentor: Mentor) {
    this.mentors.push(newMentor);       //adds the given Mentor to mentors list
  }

  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}

let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

for (let i = 0; i < 6; i++) {
  elon.hire(3);
}

for (let i = 0; i < 4; i++) {
  sponsor.hire(5);
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();
