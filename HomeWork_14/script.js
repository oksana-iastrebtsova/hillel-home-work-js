class Group {

    constructor() {
        this._students = [];
    }

    get students() {
        return this._students
    }

    addStudent(student) {
        if (student && student.isValid()) {
            this._students.push(student);
        }
    }

    getAverageMark() {
        const allMarks = this._students.flatMap(({marks}) => marks);
        console.log('allMarks: ' + allMarks);
        return Group.marksAverage(allMarks);
    }

    static marksAverage(marks) {
        return marks.reduce((acc, el) => acc + el) / marks.length;
    }
}

class Student {

    constructor(fullName, marks) {
        const [name, surname] = fullName.split(' ');
        if (name && surname) {
            this._name = name;
            this._surname = surname;
        }
        this._marks = marks;
    }

    isValid() {
        return this._name && this._surname && this._marks
    }

    get name() {
        return this._name;
    }

    get surname() {
        return this._surname;
    }

    get marks() {
        return this._marks;
    }
}

const feGroup = new Group();
feGroup.addStudent( new Student('John Doe', [10, 10, 5, 10]));
feGroup.addStudent(new Student('Alex Smith', [10, 9, 8]));
feGroup.addStudent(new Student('Bob Johnson', [9, 10, 10, 8]));
console.log(feGroup.students);

feGroup.students = [];
console.log(feGroup.students);

feGroup.addStudent(new Student('Bob Marley'));
feGroup.addStudent(new Student('Bob', [10]));
console.log(feGroup.students);

console.log('AverageMark: ' + feGroup.getAverageMark());





