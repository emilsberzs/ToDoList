import { firstLoad } from './page_builder'
import './styles.css'
import { allTasks, makeToDo, findIndex, removeTask, toggleComplete } from './task_manager'

//Just arbitrary tasks for now
const task_one = new makeToDo('work', 'go to work', 'today', 'high')
const task_two = new makeToDo('eat', 'have some breakfast', 'tommorow', 'medium')
const task_three = new makeToDo('sleep', 'go to bed', 'today', 'low')

firstLoad()