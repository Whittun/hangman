export default class NumberOfAttempts {
  create () {
    if (document.querySelector(".guesses-counter")) {
      document.querySelector(".guesses-counter").remove()
    }

    const p = document.createElement("p")
    p.classList.add("guesses-counter")
    p.innerHTML = `Incorrect guesses: <span class="guesses-counter__num">0 / 6</span>`

    const rightColumn = document.querySelector(".main__right-column")
    rightColumn.append(p)
  }
}