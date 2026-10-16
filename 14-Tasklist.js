//adds new task in a new array
function addTask(tasks, title) {
  const taskId = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
  const newTask = {
    id: taskId,
    title,
    completed: false,
  };
  return [...tasks, newTask];
}

//sets tasks to complete in a new array
function completeTask(tasks, taskId) {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, completed: true } : task,
  );
}

//remove tasks in a new array
function removeTask(tasks, taskId) {
  return tasks.filter((task) => task.id !== taskId);
}

//counts the num of incomplete tasks
function countIncompleteTasks(tasks) {
  return tasks.filter((task) => !task.completed).length;
}

//input
const tasks = [
  { id: 1, title: "Review variables", completed: true },
  { id: 2, title: "Practice functions", completed: false },
];
const withNewTask = addTask(tasks, "Build task utilities");
const completed = completeTask(withNewTask, 2);

//output
console.log(withNewTask.map((task) => task.title));
console.log(countIncompleteTasks(completed));
console.log(removeTask(completed, 1).map((task) => task.id));
console.log(tasks.length);
console.log(countIncompleteTasks(tasks));
