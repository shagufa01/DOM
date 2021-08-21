let book = document.getElementById("parent");
console.log(book.children);

let book1 = document.getElementById("parent");
console.log(book1.childNodes);

let book2 = document.getElementById("parent");
console.log(book2.firstChild);

let book3 = document.getElementById("parent");
console.log(book3.lastchild);

let bookEl = document.getElementById("parent");
console.log(bookEl.firstElementChild);

let bookEl2 = document.getElementById("parent");
console.log(bookEl2.lastElementChild);

let bookEl3 = document.getElementById("parent");
console.log(bookEl3.children[2]);

let bookSib = document.getElementById("parent");
console.log(bookSib.previousSibling);

let bookSib2 = document.getElementById("parent");
console.log(bookSib2.nextSibling);

let bookSib3 = document.getElementById("parent");
console.log(bookSib3.previousElementSibling);

let bookSib4 = document.getElementById("parent");
console.log(bookSib4.nextelementSibling);

let bookMain = document.getElementById("parent");
console.log(bookMain.parentElement);

let bookMain2 = document.getElementById("parent");
console.log(bookMain2.parentNode);

// parentNode and parentElement work the same