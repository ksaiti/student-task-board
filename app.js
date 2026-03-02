import { tasks } from './data/tasks.js'

const board = document.getElementById("board")
const searchInput = document.getElementById("search")

const columns = ["todo", "doing", "done"]

function renderBoard(filterText = "") {
  board.innerHTML = "" // clear previous

  columns.forEach(status => {
    const column = document.createElement("div")
    column.className = "column"

    const title = document.createElement("h3")
    title.textContent = status.toUpperCase()
    column.appendChild(title)

    tasks
      .filter(task =>
        task.status === status &&
        task.title.toLowerCase().includes(filterText.toLowerCase())
      )
      .forEach(task => {
        const card = document.createElement("div")
        card.className = "task"
        card.textContent = `${task.title} (${task.priority.toUpperCase()})`
        column.appendChild(card)
      })

    board.appendChild(column)
  })
}

// initial render
renderBoard()

// live search
searchInput.addEventListener("input", e => {
  renderBoard(e.target.value)
})
