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
    // Person's class' constructor  
    // constructor (n:string = 'Jane Doe', a:number = 30, g:string = 'female',
    super(n, a, g);

    this.previousOrganization = pO;
    this.skippedDays = sD;
  }

  public getGoal() :any {
    console.log('Be a junior software developer.');
  }
}

const s1 = new Student('Bela',null,null,'testOrg', 3);
s1.getGoal();








/* class Student {
    name: string;
    age: number;
    gender: string;
    previousOrganization: string;
    skippedDays: number;

    constructor (newName?, newAge?, newGender?, newPreviousOrganization?) {
        if (!newName && !newAge && !newGender && !newPreviousOrganization) {
          this.name = "Jane Doe";
          this.age = 30;
          this.gender = "female";
          this.previousOrganization = "Smartlook";
          this.skippedDays = 0;
        }
        else {
        this.name = newName;
        this.age = newAge;
        this.gender = newGender;
        this.previousOrganization = 'The School of Life';
        this.skippedDays = 0;
      }
     }

    getGoal() {
        console.log("Be a junior software developer.");
    } 

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
    } 

    skipDays(numberOfDays) {
        this.skipDays += numberOfDays;  
    }
    }

    class Mentor {
        name: string;
        age: number;
        gender: string;
        level: string;

        constructor (newName?, newAge?, newGender?, newLevel?) {
            if (!newName && !newAge && !newGender && !this.level) {
              this.name = "Jane Doe";
              this.age = 30;
              this.gender = "female";
              this.level = 'intermediate';  // ide beadni hogy milyen level, junior/intermediate/senior
            }
            else {
            this.name = newName;
            this.age = newAge;
            this.gender = newGender;
            this.level = newLevel;  // ez itt jo?           Hogyan kell beadni a level of mentor??
            }
        }    

        getGoal() {
            console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
        }
    }

    class Sponsor {
        name: string;
        age: number;
        gender: string;
        company: string;
        hiredStudents: number;

        constructor(newName?, newAge?, newGender?, newCompany?, newHiredStudents?) {      // itt miert nem jo a newcompany es hiredstudents?
            if (!newName && !newAge && !newGender && !newCompany && !newHiredStudents) {  // itt jo a this.compay es this.hiredstudents?
              this.name = "Jane Doe";
              this.age = 30;
              this.gender = "female";
              this.company = 'Google';
              this.hiredStudents = 0;
            }
            else {
            this.name = newName;
            this.age = newAge;
            this.gender = newGender;
            this.company = newCompany;  // ez itt jo? 
            this.hiredStudents = newHiredStudents;        
            }
        } 


        
    } */
