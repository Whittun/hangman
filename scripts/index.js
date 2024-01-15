import questionsData from "./questionsData.js"

import Keyboard from "./keyboard.js"
import QuestionsAndAnswers from "./questionsAndAnswers.js"
import NumberOfAttempts from "./numberOfAttempts.js"
import GameOver from "./gameOver.js"
import Gallows from "./gallows.js"

function getRandomNumber (min, max) {
  min -= 0.5
  max += 0.5

  let number = min + Math.random() * (max - min)
  return Math.round(number);
}

function getRandomQuestion (questionsData) {
  const num = getRandomNumber(0, questionsData.length - 1)
  
  return [questionsData[num], num]
}

const main = document.createElement("main")
main.classList.add("main")

const leftColumn = document.createElement("div")
leftColumn.classList.add("main__left-column")

const rightColumn = document.createElement("div")
rightColumn.classList.add("main__right-column")

const title = document.createElement("h1")
title.classList.add("title")
title.innerText = "Hangman game"

let [randomQuestion, counterQuestion] = getRandomQuestion(questionsData)

function changeQuestion () {
  if (counterQuestion < questionsData.length - 1) {
    counterQuestion++
    randomQuestion = questionsData[counterQuestion]
  } else {
    counterQuestion = 0
    randomQuestion = questionsData[counterQuestion]
  }
}

function renderGame () {
  changeQuestion()
  const gallows = new Gallows()
  const gameOver = new GameOver(renderGame)
  const questionsAndAnswers = new QuestionsAndAnswers(randomQuestion)
  const keyboard = new Keyboard(randomQuestion, gameOver, gallows.addBodyPart.bind(gallows))
  const numberOfAttempts = new NumberOfAttempts()

  main.append(leftColumn)
  main.append(rightColumn)

  document.body.append(main)

  leftColumn.append(gallows.create())
  leftColumn.append(title)
  questionsAndAnswers.create()
  numberOfAttempts.create()
  keyboard.create() 

  console.log("Правильный ответ: ", keyboard.answer)
}

renderGame()