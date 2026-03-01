import { tasks } from './data/tasks.js'

const board = document.getElementById("board")

const columns = ["todo", "doing", "done"]

columns.forEach(status => {
  const column = document.createElement("div")
  column.className = "column"

  const title = document.createElement("h3")
  title.textContent = status.toUpperCase()
  column.appendChild(title)

  tasks
    .filter(task => task.status === status)
    .forEach(task => {
      const card = document.createElement("div")
      card.className = "task"
      card.textContent = task.title
      column.appendChild(card)
    })

  board.appendChild(column)
})
