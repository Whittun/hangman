export default class questionsAndAnswers {
  constructor ({ answer, question }) {
    this.answer = answer
    this.question = question
  }

  create () {
    if (document.querySelector(".word")) {
      document.querySelector(".word").remove()
      document.querySelector(".question").remove()
    }

    const ul = document.createElement("ul")
    ul.classList.add("word")
    this.answer.split("").forEach(() => {
      const li = document.createElement("li")
      li.classList.add("word__letter")

      ul.append(li)
    })

    const p = document.createElement("p")
    p.classList.add("question")
    p.innerText = `Hint: ${this.question}`

    const rightColumn = document.querySelector(".main__right-column")

    rightColumn.append(ul)
    rightColumn.append(p)
  }
}