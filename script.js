let students = [];

const passingMarks = 33;

function checkResult(sub1, sub2, sub3, sub4, sub5, sub6) {

    if (
        sub1 >= passingMarks &&
        sub2 >= passingMarks &&
        sub3 >= passingMarks &&
        sub4 >= passingMarks &&
        sub5 >= passingMarks &&
        sub6 >= passingMarks
    ) {
        return "Pass";
    } else {
        return "Fail";
    }
}

function showStudent(name, totalMarks, result) {

    document.getElementById("studentList").innerHTML +=
        `<p>${name} - Total: ${totalMarks} - ${result}</p>`;
}

function addStudent() {

    let name = document.getElementById("name").value;

    let sub1 = Number(document.getElementById("sub1").value);
    let sub2 = Number(document.getElementById("sub2").value);
    let sub3 = Number(document.getElementById("sub3").value);
    let sub4 = Number(document.getElementById("sub4").value);
    let sub5 = Number(document.getElementById("sub5").value);
    let sub6 = Number(document.getElementById("sub6").value);

    let totalMarks = sub1 + sub2 + sub3 + sub4 + sub5 + sub6;

    let result = checkResult(
        sub1,
        sub2,
        sub3,
        sub4,
        sub5,
        sub6
    );

    showStudent(name, totalMarks, result);
}