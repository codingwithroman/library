Understand
I'm building a library (array) to which books (objects) can be added, removed and edited from the user side. Each book consists of an object with the same properties but different values. The books get displayed on the page in a table or grid format. 

Plan
Input: title, author, amount of pages, read/unread
Output: card for object with the above inputs displayed (including a remove button)
Interface: a simple grid structure with divs that contain the object's properties


Pseudocode

object constructor for book
    title
    author
    amount of pages
    genre
    read/unread

function add book to library
    add event listener click (submit button)   
    form input to object
    push object to array (library)
    call function that creates DOM element

function that creates DOM element from form input
    clear innerHTML
    iterate over each entry
        create element for each input
        append elements to DOM


