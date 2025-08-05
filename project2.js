let tasks = [];
function addTask(task, callback) {
    tasks.push(task);
    callback(); // Call the callback after adding the task
}
function printTasks() {
    console.log("Current Tasks:");
    tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
}
const printTasksArrow = () => {
    console.log("Tasks (Arrow Function):");
    tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
};

function addMultipleTasks(...newTasks) {
    newTasks.forEach(task => tasks.push(task));
    printTasks();
}

let globalVar = "I am Global";

function checkScope() {
    let localVar = "I am Local";
    console.log(globalVar);
    console.log(localVar);
}
checkScope();
addTask("Learn JavaScript", printTasks);
addTask("Complete Project", printTasksArrow);
addMultipleTasks("Buy Groceries", "Go to Gym", "Read a Book");
