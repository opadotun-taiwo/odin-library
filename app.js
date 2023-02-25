//call the selectors 1
let new_book = document.querySelector("#new-book-btn")
let new_form = document.querySelector(".new-form")
let formsubmit = document.querySelector("#form-submit")

//create an event listner for form 2
document.addEventListener("click", () => {
    new_form.style.display = "flex"
})

//create an array 3
let myLibrary = [];

//create a book object 4
function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function() {
  this.read = !this.read;
}

//render function to display in browser 6
const render = () => {
  let lib = document.querySelector(".library");
  lib.innerHTML ="";
  for(let i = 0; i < myLibrary.length; i++){
      let book = myLibrary[i];
      let bookli = document.createElement("div")
      bookli.setAttribute("class", "card")
      bookli.innerHTML = `
          <div class="card-body">
                <h3 class="title">${book.title}</h3>
                <h5 class="author">${book.author}</h5>
                <p>${book.pages} pages</p>
                <p class="read-status">${book.read ? "Read" : "Not read"}</p>
                <button class="removeBtn" onClick="removeBook(${i})">Remove</button>
                <button class="toggle-read-btn" onClick="toggleRead(${i})">ToggleRead</button>
            </div>   
      `;
      lib.appendChild(bookli);
  }
}

//a library function 5
function addBookToLibrary() {
  // do stuff here
  let author = document.querySelector(".author").value
  let title = document.querySelector(".title").value
  let pages = document.querySelector(".pages").value
  let read = document.querySelector(".read").checked

  let newBook = new Book(author, title, pages, read)
  myLibrary.push(newBook)
  render();
}

//remove function 7
const removeBook = (index) => {
  myLibrary.splice(index, 1)
  render();
}

//toggle for read function from toggleread bool object method  8
const toggleRead = (index) => {
  myLibrary[index].toggleRead();
  render();
}

//submit eventlistners last
formsubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    document.querySelector("form").reset();
})


