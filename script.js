let student = {

    id: 101,
    name: "Vidhi Mistry",
    age: 21,
    gender: "Female",

    subjects: {
        English: 85,
        Maths: 92,
        Science: 88,
        Computer: 95,
        Gujarati: 80
    }

};

function viewProfile(){

    let marks = Object.values(student.subjects);

    let total = marks.reduce((sum, mark) => sum + mark, 0);

    let percentage = total / marks.length;

    let grade = "";

    if(percentage >= 90){
        grade = "O";
    }
    else if(percentage >= 80){
        grade = "A";
    }
    else if(percentage >= 70){
        grade = "B";
    }
    else if(percentage >= 40){
        grade = "P";
    }
    else{
        grade = "F";
    }

    let result = percentage >= 40 ? "Pass" : "Fail";

    let rank = 1;

    let report = document.getElementById("report");

    report.classList.remove("hidden");

    report.innerHTML = `

    <h2>${student.name} Report Card</h2>

    <table>

        <tr>
            <th>Subject</th>
            <th>Marks</th>
        </tr>

        <tr>
            <td>English</td>
            <td>${student.subjects.English}</td>
        </tr>

        <tr>
            <td>Maths</td>
            <td>${student.subjects.Maths}</td>
        </tr>

        <tr>
            <td>Science</td>
            <td>${student.subjects.Science}</td>
        </tr>

        <tr>
            <td>Computer</td>
            <td>${student.subjects.Computer}</td>
        </tr>

        <tr>
            <td>Gujarati</td>
            <td>${student.subjects.Gujarati}</td>
        </tr>

    </table>

    <h3>Total Marks : ${total}</h3>

    <h3>Percentage : ${percentage.toFixed(2)}%</h3>

    <h3>Grade : ${grade}</h3>

    <h3>Result : ${result}</h3>

    <h3>Rank : ${rank}</h3>

    `;
}