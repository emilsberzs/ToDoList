const allTasks = []
const sidebar = document.getElementById('sidebar');


//Create new task
export function makeToDo(title, description, due_date, priority, complete = false) {
    this.title = title;
    this.description = description;
    this.due_date = due_date;
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


//Just arbitrary tasks for now
const task_one = new makeToDo('work', 'go to work', 'today', 'high')
task_one.complete = true;
const task_two = new makeToDo('eat', 'have some breakfast', 'tommorow', 'medium')
const task_three = new makeToDo('sleep', 'go to bed', 'today', 'low');



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

//Create task display
for (let i = 0; i < allTasks.length; i++) {
    let new_div = document.createElement('div');
    new_div.setAttribute('class', 'task_div');
    let title_p = document.createElement('p')
    title_p.innerHTML = 'Title: ' + allTasks[i].title
    let description_p = document.createElement('p');
    description_p.innerHTML = 'Description: ' + allTasks[i].description;
    let due_date_p = document.createElement('p');
    due_date_p.innerHTML = 'Due Date: ' + allTasks[i].due_date;
    let priority_p = document.createElement('p');
    priority_p.innerHTML = 'Priority: ' + allTasks[i].priority;
    let complete_p = document.createElement('p');
    complete_p.innerHTML = allTasks[i].complete;
    const toggle_button = document.createElement('button')
    toggle_button.innerHTML = "Complete"
    toggle_button.addEventListener('click',
        function () {
            console.log(allTasks[i].complete)
            toggleComplete(allTasks[i].title)
            console.log(allTasks[i].complete)
            complete_p.innerHTML = allTasks[i].complete
        }
    )

    new_div.append(title_p, description_p, due_date_p, priority_p, complete_p, toggle_button)
    sidebar.appendChild(new_div)
    //console.log(allTasks[i].title, allTasks[i].description, allTasks[i].due_date, allTasks[i].priority, allTasks[i].complete)
}