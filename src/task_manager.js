export const allTasks = []

//Create new task
export function makeToDo(title, description, due_date, priority, complete = false) {
    this.title = title;
    this.description = description;
    this.due_Date = due_date;
    this.priority = priority;
    this.complete = complete;
    this.task = {
        'title': this.title,
        'description': this.description,
        'due_date': this.due_date,
        'priority': this.priority,
        'complete': this.complete,
    }
    allTasks.push(this.task)
}

//Find index of task
export function findIndex(title) {
    const index = allTasks.map(function (e) { return e.title; }).indexOf(title)
    return index;
}

//Remove task by index
export function removeTask(title) {
    allTasks.splice(findIndex(title), 1)
}

//Toggle task complete
export function toggleComplete(title) {
    if (allTasks[findIndex(title)].complete == false) {
        allTasks[findIndex(title)].complete = true;
    }
    else if (allTasks[findIndex(title)].complete == true) {
        allTasks[findIndex(title)].complete = false;
    }
}