export default class Gallows {
  constructor () {
    this.bodyParts = [
      [
        "gallows__head",
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="101" height="101" viewBox="0 0 101 101" fill="none">
          <circle cx="50.5" cy="50.5" r="48" fill="none" stroke="#ffffff" stroke-width="5"/>
        </svg>
        `
      ],
      [
        "gallows__body",
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="131" viewBox="0 0 5 131" fill="none">
          <rect width="5" height="131" fill="#ffffff"/>
        </svg>
        `
      ],
      [
        "gallows__left-arm",
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="81" viewBox="0 0 68 81" fill="none">
          <rect x="63.7964" width="5" height="100" transform="rotate(39.64 63.7964 0)" fill="#ffffff"/>
        </svg>
        `
      ],
      [
        "gallows__right-arm",
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="81" viewBox="0 0 68 81" fill="none">
          <rect y="3.18951" width="5" height="100" transform="rotate(-39.6353 0 3.18951)" fill="#ffffff"/>
        </svg>
        `
      ],
      [
        "gallows__left-leg",
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="81" viewBox="0 0 68 81" fill="none">
          <rect x="63.7964" width="5" height="100" transform="rotate(39.64 63.7964 0)" fill="#ffffff"/>
        </svg>
        `
      ],
      [
        "gallows__right-leg",
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="81" viewBox="0 0 68 81" fill="none">
          <rect y="3.18951" width="5" height="100" transform="rotate(-39.6353 0 3.18951)" fill="#ffffff"/>
        </svg>
        `
      ],

    ]
  }

  create () {
    if (document.querySelector(".gallows")) {
      document.querySelector(".gallows").remove()
    }

    const ul = document.createElement("ul")
    ul.classList.add("gallows")

    return ul
  }

  addBodyPart (part) {
    const li = document.createElement("li")
    li.classList.add('gallows__item')
    li.classList.add(this.bodyParts[part][0])

    li.innerHTML = this.bodyParts[part][1]
    
    const ul = document.querySelector(".gallows")
    ul.append(li)
  }
}