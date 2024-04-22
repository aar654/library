const form = document.querySelector('.form');
const main = document.querySelector('.main');
const book = document.querySelector('.book');
const btnClose = document.querySelector('.close');
const addBook = document.querySelector('.addBook');
const formInput = document.getElementById('formInput');

let myLibrary = [

  new Book("Heartstopper", "Alice Oseman", "360", true)

];

function showBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement("div")
    book.className = "book"
    const title = document.createElement("p")
    const author = document.createElement("p")
    const pages = document.createElement("p")
    const read = document.createElement("button")
    const btnDelete = document.createElement("button")
    title.innerText = `Title: ${myLibrary[i].title}`
    author.innerText = `Author: ${myLibrary[i].author}`
    pages.innerText = `Pages: ${myLibrary[i].pages}`
    read.innerText = `Read`
    btnDelete.innerText = `Delete`
    book.appendChild(title)
    book.appendChild(author)
    book.appendChild(pages)
    book.appendChild(read)
    book.appendChild(btnDelete)
    main.appendChild(book)

    if (myLibrary[i].read == true) {
      book.classList.toggle("bookRead");
    }

    read.addEventListener("click", function () {
      book.classList.toggle("bookRead");
    });

    btnDelete.addEventListener("click", function () {
      const index = myLibrary.findIndex(book => book.title === title.innerText.replace('Title: ', ''));
      if (index !== -1) {
        removeBookFromLibrary(index);
        main.removeChild(book);
      }
    });
  }
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(titleValue, authorValue, pagesValue, readValue) {
  let title = titleValue;
  let author = authorValue;
  let pages = pagesValue;
  let read = readValue;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
}

formInput.addEventListener("submit", function (e) {
  e.preventDefault();
  let titleValue = document.getElementById('titleValue').value;
  let authorValue = document.getElementById('authorValue').value;
  let pagesValue = document.getElementById('pagesValue').value;
  let readValue = document.getElementById('readValue').checked;

  addBookToLibrary(titleValue, authorValue, pagesValue, readValue);

  const book = document.createElement("div")
  book.className = "book"
  const title = document.createElement("p")
  const author = document.createElement("p")
  const pages = document.createElement("p")
  const read = document.createElement("button")
  const btnDelete = document.createElement("button")
  title.innerText = `Title: ${titleValue}`
  author.innerText = `Author: ${authorValue}`
  pages.innerText = `Pages: ${pagesValue}`
  read.innerText = `Read`
  btnDelete.innerText = `Delete`
  book.appendChild(title)
  book.appendChild(author)
  book.appendChild(pages)
  book.appendChild(read)
  book.appendChild(btnDelete)
  main.appendChild(book)

  if (readValue === true) {
    book.classList.add("bookRead")
    book.classList.toggle("bookRead");
  }

  read.addEventListener("click", function () {
    book.classList.toggle("bookRead");
  });

  btnDelete.addEventListener("click", function () {
    const index = myLibrary.findIndex(book => book.title === title.innerText.replace('Title: ', ''));
    if (index !== -1) {
      removeBookFromLibrary(index);
      main.removeChild(book);
    }
  });
  
  form.style.visibility = "hidden";

  document.getElementById('titleValue').value = "";
  document.getElementById('authorValue').value = "";
  document.getElementById('pagesValue').value = "";
  document.getElementById('readValue').checked = false;

});

addBook.onclick = function () {
  form.style.visibility = "visible";
}

btnClose.onclick = function () {
  form.style.visibility = "hidden";
}

showBooks();
