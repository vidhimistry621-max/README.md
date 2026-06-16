const addBtn = document.querySelector(".addbtn");
const habitInput = document.getElementById("habitInput");
const habitList = document.querySelector(".habitList");
const searchInput = document.querySelector(".searchInput");

let habits =
JSON.parse(localStorage.getItem("habits")) || [];

function saveHabits() {
    localStorage.setItem(
        "habits",
        JSON.stringify(habits)
    );
}

function updateStats() {

    const totalHabits = habits.length;

    const completedHabits =
    habits.filter(h => h.completed).length;

    const activeStreak =
    habits.reduce(
        (sum,h)=>sum+h.streak,
        0
    );

    const longestStreak =
    Math.max(
        ...habits.map(
            h=>h.longestStreak
        ),
        0
    );

    document.getElementById( "totalHabits" ).textContent = totalHabits;
    document.getElementById( "completedHabits").textContent = completedHabits;
    document.getElementById("activeStreak").textContent = activeStreak;
    document.getElementById("longestStreak").textContent = longestStreak;
}
    function displayHabits(data = habits) {

    habitList.innerHTML = "";

    data.forEach(habit => {

        let badge = "";

        if(habit.streak >= 5){
            badge = " Gold";
        }
        else if(habit.streak >= 3){
            badge = "Silver";
        }
        else if(habit.streak >= 2){
            badge = "Bronze";
        }

        const div = document.createElement("div");

        div.classList.add("habitCard");

        div.innerHTML = `<h3>${habit.name}</h3>

        <p> Streak: ${habit.streak}</p>

        <p>${badge}</p>

        <button onclick="completeHabit(${habit.id})">Complete</button>

        <button onclick="deleteHabit(${habit.id})">Delete</button>
        `;

        habitList.appendChild(div);
    });
}

     addBtn.addEventListener("click", () => {

    const name =habitInput.value.trim();

    if(!name){
        alert("Enter Habit Name");
        return;
    }

    habits.push({
        id: Date.now(),
        name,
        completed:false,
        streak:0,
        longestStreak:0,
        lastCompleted:null
    });

    habitInput.value = "";

    saveHabits();
    displayHabits();
    updateStats();
});

function completeHabit(id){

    const today =
    new Date().toDateString();

    habits = habits.map(habit => {

        if(habit.id === id){

            if(
                habit.lastCompleted !== today
            ){

                habit.completed = true;

                habit.streak++;

                habit.lastCompleted =
                today;

                if(
                    habit.streak >
                    habit.longestStreak
                ){
                    habit.longestStreak =
                    habit.streak;
                }
            }
        }

        return habit;
    });

    saveHabits();
    displayHabits();
    updateStats();
}

function deleteHabit(id){

    habits =habits.filter( habit => habit.id !== id
    );

    saveHabits();
    displayHabits();
    updateStats();
}

 searchInput.addEventListener("input",() => {

        const value =
        searchInput.value
        .toLowerCase();

        const filtered =
        habits.filter(habit =>
            habit.name
            .toLowerCase()
            .includes(value)
        );

        displayHabits(filtered);
    }
);

displayHabits();
updateStats();