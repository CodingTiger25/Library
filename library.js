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
    console.log(book.title);
    myLibrary.push(book);
    //document.getElementById("addBook").style.display="none";
    //alert("Added "  + title)
    console.log(myLibrary);
    ;

}

function openForm()
{
    document.getElementById("addBook").style.display="block";
}


 //document.getElementById("btnOpen").addEventListener('click', openForm);




function displayBooks()
{
    <table style= "width: 100%">
        <tr>
            <th>Title</th>
            <th>
                Author
            </th>
            <th>
                Pages
            </th>
            <th>
                READ? 
            </th>
        </tr>

    </table>
};

document.querySelector("main").innerHTML = `
<ol>
    ${displayBooks()}
</ol>`;


function closeForm()
{
    document.getElementById("addBook").style.display="none";
}