const openForm = () => {
    document.getElementById("bookForm").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

const closeForm = () => {
    document.getElementById("bookForm").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

const myLibrary = [
    {
        'book title': 'The Great Gatsby',
        'author': 'F. Scott Fitzgerald',
        'amount of pages': 180,
        'genre': 'Fiction',
        'read status': 'read'
    },
    {
        'book title': '1984',
        'author': 'George Orwell',
        'amount of pages': 328,
        'genre': 'Dystopian',
        'read status': 'unread'
    },
    {
        'book title': 'To Kill a Mockingbird',
        'author': 'Harper Lee',
        'amount of pages': 281,
        'genre': 'Fiction',
        'read status': 'read'
    },
    {
        'book title': 'The Hobbit',
        'author': 'J.R.R. Tolkien',
        'amount of pages': 310,
        'genre': 'Fantasy',
        'read status': 'read'
    },
    {
        'book title': 'Moby Dick',
        'author': 'Herman Melville',
        'amount of pages': 585,
        'genre': 'Adventure',
        'read status': 'unread'
    }
];


const form = document.getElementById("HTMLform");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    //collect form data
    const formData = new FormData(form);

    // convert form data to an object
    const formObject = Object.fromEntries(formData.entries());

    // add object to the array
    myLibrary.push(formObject);

    // clear form inputs
    form.reset();

    // close popup form and overlay
    closeForm();

    // update the grid with the book data from the array
    populateGrid(myLibrary);

    console.table(myLibrary);
});

const populateGrid = (data) => {
    const container = document.querySelector(".projectCards");

    // Check if container exists to prevent errors
    if (!container) {
        console.error("Grid container not found");
        return;
    }

    container.innerHTML = '';

    data.forEach((item, index) => {

        const cell = document.createElement("div");
        cell.classList.add("grid-item")

        const cellTopRow = document.createElement("div");
        cellTopRow.classList.add("cellTopRow");

        const title = document.createElement("h2");
        title.textContent = item['book title'];
        cellTopRow.appendChild(title);

        const readStatus = document.createElement("label");
        readStatus.innerHTML = `<input type="checkbox" ${item['read status'] === 'read' ? 'checked' : ''}> 
                                <span></span>`;
        cellTopRow.appendChild(readStatus);
        
        cell.appendChild(cellTopRow);

        const author = document.createElement("h4");
        author.textContent = `by ${item['author']}`;
        cell.appendChild(author);

        const pages = document.createElement("p");
        pages.innerHTML = `Pages: <span style="font-weight: bold;">${item['amount of pages']}</span>`;
        cell.appendChild(pages);

        const cellBottomRow = document.createElement("div");
        cellBottomRow.classList.add("cellBottomRow");

        const genre = document.createElement("p");
        genre.innerHTML = `Genre: <span style="font-weight: bold;">${item['genre']}</span>`;
        cellBottomRow.appendChild(genre);

        const removeButton = document.createElement("button");
        removeButton.innerHTML = `<i class="fas fa-trash-alt"></i>`;
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", () => {
            removeBook(index);
        });
        cellBottomRow.appendChild(removeButton);

        cell.appendChild(cellBottomRow);

        container.appendChild(cell);
    })
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    populateGrid(myLibrary);
}

populateGrid(myLibrary);
