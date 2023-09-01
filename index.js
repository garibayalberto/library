const myLibrary = [
  {
    title: "Book 1 Book 1 Book 1 Book 1 Book 1 Book 1",
    author: "Author 1"

  },
  {
    title: "Book 2",
    author: "Author 2"

  },
  {
    title: "Book 3",
    author: "Author 3"

  },
  {
    title: "Book 4",
    author: "Author 4"

  },
  {
    title: "Book 5",
    author: "Author 5"

  }
];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

let libraryGrid = document.getElementById("book-grid");

function updateBooksGrid() {
  //resetBooksGrid()
  for (let book of myLibrary) {
    createBookCard(book);
  }
}

function createBookCard(book) {
  const bookCard = document.createElement('div')
  const title = document.createElement('p')
  const author = document.createElement('p')
  //const pages = document.createElement('p')
  //const buttonGroup = document.createElement('div')
  //const readBtn = document.createElement('button')
  //const removeBtn = document.createElement('button')

  bookCard.classList.add('book-card')
  //buttonGroup.classList.add('button-group')
  //readBtn.classList.add('btn')
  //removeBtn.classList.add('btn')
  //readBtn.onclick = toggleRead
  //removeBtn.onclick = removeBook

  title.textContent = `"${book.title}"`
  author.textContent = book.author
  //pages.textContent = `${book.pages} pages`
  //removeBtn.textContent = 'Remove'

  // if (book.isRead) {
  //   readBtn.textContent = 'Read'
  //   readBtn.classList.add('btn-light-green')
  // } else {
  //   readBtn.textContent = 'Not read'
  //   readBtn.classList.add('btn-light-red')
  // }

  bookCard.appendChild(title)
  bookCard.appendChild(author)
  //bookCard.appendChild(pages)
  //buttonGroup.appendChild(readBtn)
  //buttonGroup.appendChild(removeBtn)
  //bookCard.appendChild(buttonGroup)
  libraryGrid.appendChild(bookCard)
}
