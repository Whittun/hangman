export default class keyboard {
  constructor ({answer}, gameOver, addBodyPart) {
    this.symbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    this.answer = answer
    this.attempt = 0
    this.correctLettersCounter = 0
    this.gameOver = gameOver
    this.addBodyPart = addBodyPart
    this.handlerKey = (e) => {
      const disabledButtons = document.querySelectorAll(".keyboard__button:disabled")

      for (let i = 0; i < disabledButtons.length; i++) {
        if (e.key === disabledButtons[i].innerText.toLowerCase()) {
          return
        }
      }

      const letters = document.querySelectorAll(".word__letter")

      if (this.symbols.includes(e.key.toUpperCase())) {

        this.answer.split("").forEach((letter, key) => {
          if (e.key.toLowerCase() === letter.toLowerCase()) {
            letters[key].innerText = e.key.toUpperCase()
            this.correctLettersCounter += 1
          }
        })
  
        const buttons = document.querySelectorAll(".keyboard__button")
  
        if (!this.answer.toLowerCase().includes(e.key.toLowerCase())) {
          
          this.addBodyPart(this.attempt)
          this.attempt += 1
  
          const guessesCounter = document.querySelector(".guesses-counter__num")
          guessesCounter.innerText = `${this.attempt} / 6`
        }
  
        buttons.forEach((button, key) => {
          if (button.innerText === e.key.toUpperCase()) {
            buttons[key].setAttribute("disabled", "disabled")
            buttons[key].parentElement.classList.add("keyboard__item--disabled")
          }
        })
      } else if (e.key !== "Enter") {
        alert("Вводите буквы английской раскладки")
      }
  
      if (this.attempt === 6) {
        this.gameOver.create(this.answer, "lost")
        document.removeEventListener("keypress", this.handlerKey)
      }
      
      if (this.correctLettersCounter === this.answer.length) {
        this.gameOver.create(this.answer, "win")
        document.removeEventListener("keypress", this.handlerKey)
      }
    }
  }

  create () {
    if (document.querySelector(".keyboard")) {
      document.querySelector(".keyboard").remove()
      this.attempt = 0
    }

    const ul = document.createElement("ul")
    ul.classList.add("keyboard")

    this.symbols.forEach((letter) => {
      const li = document.createElement("li")
      li.classList.add("keyboard__item")

      const button = document.createElement("button")
      button.classList.add("keyboard__button")
      button.innerText = letter
      button.addEventListener("click", (e) => {
        const letters = document.querySelectorAll(".word__letter")

        const buttonText = e.currentTarget.innerText
        this.answer.split("").forEach((letter, key) => {
          if (buttonText.toLowerCase() === letter.toLowerCase()) {
            letters[key].innerText = buttonText
            this.correctLettersCounter += 1
          }
        })

        if (!this.answer.toLowerCase().includes(buttonText.toLowerCase())) {
          this.addBodyPart(this.attempt)
          this.attempt += 1

          const guessesCounter = document.querySelector(".guesses-counter__num")
          guessesCounter.innerText = `${this.attempt} / 6`
        }

        e.currentTarget.setAttribute("disabled", "disabled")
        e.currentTarget.parentElement.classList.add("keyboard__item--disabled")

        if (this.attempt === 6) {
          this.gameOver.create(this.answer, "lost")
          document.removeEventListener("keypress", this.handlerKey)
        }

        if (this.correctLettersCounter === this.answer.length) {
          this.gameOver.create(this.answer, "win")
          document.removeEventListener("keypress", this.handlerKey)
        }
      })

      li.append(button)

      ul.append(li)
    })

    this.handlerKeyboard()

    const rightColumn = document.querySelector(".main__right-column")
    rightColumn.append(ul)
  }

  handlerKeyboard () {
    document.addEventListener("keypress", this.handlerKey)
  }
}