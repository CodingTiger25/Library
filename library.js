const myLibrary = [];



function Book(title, author,pages,read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return {title: this.title, author:this.author, pages:this.pages,read:this.read}
    }
}

function addBookToLibrary(title, author,pages,read){

    let book = new Book(title, author,pages,read);
    myLibrary.push(book);
    document.getElementById("addBook").style.display="none";
    alert("Added "  + title)
    ;

}


function openForm()
{
    document.getElementById("addBook").style.display="block";
}

function closeForm()
{
    document.getElementById("addBook").style.display="none";
}