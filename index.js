const myLibrary = [
];

const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(form)
  for (const pair of formData.entries()) {
    console.log(pair)
  }
})

function Book(title, author) {
  this.title = title;
  this.author = author;

  return 
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

let libraryGrid = document.getElementById("book-grid");

function updateBooksGrid() {
  resetBooksGrid()
  for (let book of myLibrary) {
    createBookCard(book);
  }
}

function resetBooksGrid() {
  libraryGrid.innerHTML = '';
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

addBookToLibrary(new Book("1984", "George Orwell"));
addBookToLibrary(new Book("Animal Farm" , "George Orwell"));
addBookToLibrary(new Book("Dracula" , "Bram Stoker"));
addBookToLibrary(new Book("Fahrenheit 451" , "Ray Bradbury"));
addBookToLibrary(new Book("Odyssey" , "Homer"));
updateBooksGrid();