/* eslint-disable*/
//"use strict";
/* global studObj */

studInfo = "";

class User {


    constructor() {

        this.courseInfo = [{ Id: "cs301", name: "Html", code: "cs1" }, { Id: "cs303", name: "Java", code: "cs2" },
        { Id: "cs403", name: "JavaSript", code: "cs3" }, { Id: "cs503", name: "Data", code: "cs4" }]

        this.userInfo = [
            { fname: "Amare", lname: "alew", phone: 1234567, role: "student", password: "1234", id: "1" },
            { fname: "Dere", lname: "halew", phone: 1234567, role: "admin", password: "1234", id: "2" },
            { fname: "Seme", lname: "palew", phone: 1234567, role: "faculty", password: "1234", id: "3" },
            { fname: "Bikale", lname: "calew", phone: 1234567, role: "student", password: "1234", id: "4" },
            { fname: "Fre", lname: "balew", phone: 1234567, role: "student", password: "1234", id: "5" },
            { fname: "Tes", lname: "kalew", phone: 1234567, role: "faculty", password: "1234", id: "6" },
            { fname: "Paul", lname: "ralew", phone: 1234567, role: "faculty", password: "1234", id: "7" },
            { fname: "Tk", lname: "ralew", phone: 1234567, role: "faculty", password: "1234", id: "8" }
        ]


    }
    mysort(sortby) {
        let y = this.courseInfo.sort((a, b) => a[sortby] > b[sortby] ? 1 : -1);
        return y;
    }

    checkuser(id, ps) {
        localStorage.setItem('CourseInfo', JSON.stringify(this.courseInfo));
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo));


        for (let key of this.userInfo) {
            if (ps == key.password && key.id == id) {
                if (key.role == "student") window.open('student.html?id=' + key.id, '_self');
                else if (key.role == "admin") window.open('Admin.html?id=' + key.id, '_self');
                else window.open('faculty.html?id=' + key.id, '_self');

            }

        }


    }
    showFaculty(userRole, sortby) {
        var userData = JSON.parse(localStorage.getItem('userInfo'));
        console.log(userData)

        localStorage.setItem('userInfo', JSON.stringify(userData.sort((a, b) => a[sortby] > b[sortby] ? 1 : -1)));
        // console.log(this.userInfo)
        studInfo = `<table id="empTable"> <tr><th onclick="studObj.showFaculty('${userRole}','fname')">
        Firstname</th><th onclick="studObj.showFaculty('${userRole}','lname')">Lastname
            </th><th onclick="studObj.showFaculty('${userRole}','phone')">Phone</th>
            <th onclick="studObj.showFaculty('${userRole}','role')">Role</th>
            <th onclick="studObj.showFaculty('${userRole}','password')">Password</th>
            <th onclick="studObj.showFaculty('${userRole}','id')">Id</th>
            <th onclick="studObj.showFaculty('${userRole}','id')">Department</th>
         
            </tr> `;



        for (let key of userData) {
            if (key.role == userRole) {
                // let stuinfo=mystudent.userInfo.find((item)=>item.id==studentId)
                studInfo += "<tr><td contenteditable='true'>" + key.fname + "</td><td contenteditable='true'>" + key.lname + "</td><td contenteditable='true'>" + key.phone + "</td><td contenteditable='true'>" + key.role + "</td><td contenteditable='true'>" + key.password + "</td><td contenteditable='true'>" + key.id + "</td><td contenteditable='true'>" + facultyObj.department + "</td></tr>";
            }


        }

        document.getElementById("showInfo").innerHTML = studInfo + "</table>";
    }
    showStudent(userRole, sortby) {
        var userData = JSON.parse(localStorage.getItem('userInfo'));
        var studentInformation = JSON.parse(localStorage.getItem('studentInfo'));
        console.log(userData)

        localStorage.setItem('userInfo', JSON.stringify(userData.sort((a, b) => a[sortby] > b[sortby] ? 1 : -1)));
        // console.log(this.userInfo)
        studInfo = `<table id="empTable"> <tr><th onclick="studObj.showStudent('${userRole}','fname')">
        Firstname</th><th onclick="studObj.showStudent('${userRole}','lname')">Lastname
            </th><th onclick="studObj.showStudent('${userRole}','phone')">Phone</th>
            <th onclick="studObj.showStudent('${userRole}','role')">Role</th>
            <th onclick="studObj.showStudent('${userRole}','password')">Password</th>
            <th onclick="studObj.showStudent('${userRole}','id')">Id</th>
            <th onclick="studObj.showStudent('${userRole}','id')">Entry Year</th>
            <th onclick="studObj.showStudent('${userRole}','id')">Gpa</th>
            <th onclick="studObj.showStudent('${userRole}','id')">Course</th>
         
            </tr> `;



        for (let key of userData) {
            if (key.role == userRole) {
                // let stuinfo=mystudent.userInfo.find((item)=>item.id==studentId)
                studInfo += "<tr><td contenteditable='true'>" + key.fname + "</td><td contenteditable='true'>" + key.lname + "</td><td contenteditable='true'>" + key.phone + "</td><td contenteditable='true'>" + key.role + "</td><td contenteditable='true'>" + key.password + "</td><td contenteditable='true'>" + key.id + "</td>";
                for (let k of studentInformation) {
                    console.log(k)
                    if (key.id == k.id) {
                        studInfo += "<td contenteditable='true'>" + k.entryYear + "</td><td contenteditable='true'>" + k.gpa + "</td><td contenteditable='true'>";
                        // for(let keyCourses of k.course){
                        studInfo += k["course"].join(",");

                        // } 
                        studInfo += "</td></tr>";
                    }

                }

            }


        }

        document.getElementById("showInfo").innerHTML = studInfo + "</table>";
    }

    showTableData() {
        document.getElementById('showTable').innerHTML = "";
        var myTab = document.getElementById('empTable');
        let myobj = [];
        var userData = JSON.parse(localStorage.getItem('userInfo'));
        // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
        for (let i = 1; i < myTab.rows.length; i++) {
            let temp = [];

            // GET THE CELLS COLLECTION OF THE CURRENT ROW.
            var objCells = myTab.rows.item(i).cells;

            // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
            for (var j = 0; j < objCells.length; j++) {

                // temp = temp + objCells.item(j).innerHTML;
                temp[j] = objCells.item(j).innerHTML;
                // console.log(temp[j] )
            }

            myobj = { fname: temp[0], lname: temp[1], phone: temp[2], role: temp[3], password: temp[4], id: temp[5] };
            // console.log(myobj.fname)

            userData.splice(userData.findIndex((item) => item.id == myobj.id), 1, myobj);
            localStorage.setItem('userInfo', JSON.stringify(userData));





        }



        // localStorage.setItem('userInfo', JSON.stringify(myobj));
    }



};
class Student extends User {
    constructor() {
        super();
        this.studentInfo = [{ id: "1", entryYear: 2017, gpa: 4, course: ["html", "java"] },
        { id: "4", entryYear: 2019, gpa: 4, course: ["Oop", "java"] },
        { id: "5", entryYear: 2018, gpa: 4, course: ["Data", "Js", "Algorithm"] }]

        localStorage.setItem('studentInfo', JSON.stringify(this.studentInfo));
    }


};
class Faculty extends Student {

    constructor() {
        super();
        this.department = ["Msd"];


    }
};

class Admin extends Faculty {
    constructor() {
        super();
    }

};
studObj = new User();
facultyObj = new Faculty();


