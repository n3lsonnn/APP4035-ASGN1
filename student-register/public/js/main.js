const server = 'http://localhost:3001';
var studentId;
var studentName;
var Role;
var password;
var studentCourse;
var studentCourse1;
var studentCourse2;
var studentCourse3;
async function fetchStudents() {
    const url = server + '/students';
    const options = {
        method: 'GET',
        headers: {
            'Accept' : 'application/json'
        }
    }
    const response = await fetch(url, options);
    const students = await response.json();
    populateContent(students);
}
async function login(){
    const url = server + '/students';
    const options = {
        method: 'GET',
        headers: {
            'Accept' : 'application/json'
        }
    }
    const response = await fetch(url, options);
    const students = await response.json();
    
}
async function addStudent() {
    const url = server + '/students';
    const student = {id: studentId, name: studentName,password:password,role:Role, course: [studentCourse], course1: studentCourse1, course2: studentCourse2, course3: studentCourse3};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(student)
    }
    const response = await fetch(url, options);
}

function populateContent(students) {
    var table = document.getElementsById('content');
    table.innerHTML = "<tr><th>Student Id</th><th>Full Name</th><th>Role:</th><th>Course1</th><th> Course2</th><th>course3</th><th>course4</th></tr>";
    students.forEach(student => {
        var row = document.createElement('tr');
        var dataId = document.createElement('td');
        var textId = document.createTextNode(student.id);
        dataId.appendChild(textId);
        var dataName = document.createElement('td');
        var textName = document.createTextNode(student.name);
        dataName.appendChild(textName);
        var dataRole = document.createElement('td');
        var textRole = document.createTextNode(student.role);
        dataRole.appendChild(textRole);
        var dataCourse = document.createElement('td');
        var textCourse = document.createTextNode(student.course);
        dataCourse.appendChild(textCourse);
        var dataCourse1 = document.createElement('td');
        var textCourse1 = document.createTextNode(student.course1);
        dataCourse1.appendChild(textCourse1);
        var dataCourse2 = document.createElement('td');
        var textCourse2 = document.createTextNode(student.course2);
        dataCourse2.appendChild(textCourse2);
        var dataCourse3 = document.createElement('td');
        var textCourse3 = document.createTextNode(student.course3);
        dataCourse3.appendChild(textCourse3);
        row.appendChild(dataId);
        row.appendChild(dataName);
        row.appendChild(dataRole);
        row.appendChild(dataCourse);
        row.appendChild(dataCourse1);
        row.appendChild(dataCourse2);
        row.appendChild(dataCourse3);
        table.appendChild(row);
    });
}

document.querySelector('form').addEventListener('submit', (e) => {
    studentId = document.getElementById('studentId').value;
    studentName = document.getElementById('studentName').value;
    Role = document.getElementById('Role').value;
    password = document.getElementById('password').value;
    studentCourse = document.getElementById('studentCourse').value;
    studentCourse1 = document.getElementById('studentCourse1').value;
    studentCourse2 = document.getElementById('studentCourse2').value;
    studentCourse3 = document.getElementById('studentCourse3').value;
    if (studentId && studentName && studentCourse) {
        studentId = parseInt(studentId);
        addStudent();
        fetchStudents();
    }
    e.preventDefault();
});
