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

let bookMain2 = document.getElementById("parent"); // parentNode and parentElement work the same
console.log(bookMain2.parentNode);

// adding css using dom

// 1. individual property

let para = document.getElementById("line");
console.log(para);

para.style.backgroundColor = "yellow";
para.style.color ="red";


// css text

let paragraph = document.getElementById("session");
console.log(paragraph);

paragraph.style.cssText = "background-color: pink; color: red;"

// adding classnames

let set = document.getElementById("practice");
console.log(set);

set.classList.add("changes");

// button

function onFirstClick() {
let psycho = document.getElementById("line");
psycho.classList.add("changes");
}


function onNextClick() {
    let psycho = document.getElementById("line");
    psycho.classList.remove("changes");
    }
    

// inner text

let easy = document.getElementById("quote");
console.log(easy.innerText);

// text content

console.log(easy.textContent);

// inner HTML 

console.log(easy.innerHTML);








