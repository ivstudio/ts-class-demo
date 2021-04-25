class User {
  constructor(
    public first_name: string,
    public last_name: string,
    protected age: number
  ) {}

  preferredName: string = this.first_name;

  get fullname(): string {
    return `${this.first_name} ${this.last_name}`;
  }

  set addPreferredName(val: string) {
    this.preferredName = val;
  }

  get isAdult(): boolean {
    return this.age >= 21;
  }
}

class Student extends User {
  constructor(
    first_name: string,
    last_name: string,
    age: number,
    public honors: boolean
  ) {
    super(first_name, last_name, age);
  }

  get isAdult(): boolean {
    return this.age >= 18;
  }

  get getAvailableActivities() {
    return this.honors ? "a, b, c" : null;
  }
}

const studentA = new Student("John", "Doe", 18, true);
console.log(studentA.fullname);
console.log(studentA.isAdult);
console.log(studentA.getAvailableActivities);
studentA.addPreferredName = "Jonny";
console.log(studentA.preferredName);

const studentB = new Student("Jane", "Smith", 16, false);
console.log(studentB.fullname);
console.log(studentB.isAdult);
console.log(studentB.getAvailableActivities);

const faculty = new User("Mario", "Ponce", 32);
console.log(faculty.fullname);
console.log(faculty.isAdult);
