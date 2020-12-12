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

// Средний бал студента, id которого передан в аргументе
console.log('Average By Student: ' + averageStudentMark(10));

// Средний бал по всем студентам
console.log('Average By Group: ' + averageGroupMark());

function averageStudentMark(id) {
    let student = students.find(student => student.id === id);
    return !student ? null : arrAverage(student.marks);
}

function averageGroupMark() {
    let allMarks = students.flatMap(({marks}) => marks);
    return arrAverage(allMarks);
}

function arrAverage(array) {
    return array.reduce((acc, el) => acc + el) / array.length;
}