export default class gameOver {
  constructor (resetGame) {
    this.resetGame = resetGame
  }
  
  create (answer, status) {
    const section = document.createElement("section")
    section.classList.add("game-result")

    const div = document.createElement("div")
    div.classList.add("game-result__content")

    section.append(div)

    const p1 = document.createElement("p")
    p1.classList.add("game-result__text")
    const styleStatus = (status === "win") ? "game-result__text--win" : "game-result__text--lost"
    p1.classList.add(styleStatus)
    p1.innerText = (status === "win") ? "Congratulations! You've won!" : "You lost!"

    div.append(p1)

    const p2 = document.createElement("p")
    p2.classList.add("game-result__word")
    p2.innerHTML = `The correct answers are: <span class="game-result__word-correct">${answer}</span>`

    div.append(p2)

    const button = document.createElement("button")
    button.classList.add("game-result__button")
    button.innerText = "Play again?"
    button.addEventListener("click", () => {
      this.resetGame()
      section.remove()
      document.body.classList.remove("off-scroll")
    })

    div.append(button)

    document.body.append(section)
    document.body.classList.add("off-scroll")
    window.scrollTo(0, 0)
  }
}