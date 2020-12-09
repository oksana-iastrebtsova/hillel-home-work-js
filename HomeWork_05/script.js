const students = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
]

// выведет средний бал студента, ид которого передан в аргументе
averageStudentMark(10);

// выведет средний бал по всем студентам
averageGroupMark(students);

function averageStudentMark(id) {
    let student = students.find(student => student.id === id);
    if (student === undefined) {
        console.log('Student is not found');
    } else {
        console.log('Student мark average: ' +
            student.marks.reduce((acc, el) => acc + el) / student.marks.length);
    }
}

function averageGroupMark(students) {
    let allMarks = students.map(({marks}) => marks).reduce((arr1, arr2) => arr1.concat(arr2));
    console.log('Group мark average: ' + allMarks.reduce((acc, el) => acc + el) / allMarks.length);
}