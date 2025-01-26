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
    document.getElementById("displayBook").innerHTML= myLibrary.map(library => 
        `
        <table>
            <tr>
                <th>
                   Title
                </th>
            <tr>

            <tr>
                <td>
                    ${library.title}
                </td>
            </tr>
            
            <th>
                   Author
                </th>
            <tr>

            <tr>
                <td>
                    ${library.author}
                </td>
            </tr>

            <th>
                   Amount of pages
                </th>
            <tr>

            <tr>
                <td>
                    ${library.pages}
                </td>
            </tr>

            <th>
                   Read
                </th>
            <tr>

            <tr>
                <td>
                    ${library.read}
                </td>
            </tr>

        </table>
        `
    )
    ;

}

function openForm()
{
    document.getElementById("addBook").style.display="block";
}


 document.getElementById("opnForm").onclick=openForm;


function closeForm()
{
    document.getElementById("addBook").style.display="none";
}

document.getElementById("clseForm").onclick=closeForm;

