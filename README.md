# Book Search Engine Starter Code

## User Story
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase

## Acceptance Criteria
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button


## Notes
- Updated the `auth middleware` to work with `Graphql API`
- Implemented the `Apollo Server` and applied it to the `Express server` as middleware
- Used the Schema directory to set up `index.js, resolver.js, typDefs.js` to define the `queries and mutations`
- Set up the entire `backend` with `queries and mutations` for the client to use
- Use the backend `queries and mutations` to connect to the `frontend`
- used `query hooks` and `mutation hooks` to dynamically change the page

## Deployed application
- https://aqueous-journey-51557.herokuapp.com/

Searched Books:
![searched books](https://user-images.githubusercontent.com/104086686/194729515-673ce03f-2a84-45a0-ba96-cbaff4f56ed2.png)

Saved Books:
![saved books](https://user-images.githubusercontent.com/104086686/194729524-eebf9816-b19e-4f12-b232-b4d00e047b31.png)


Deleted Books:
![deleted books](https://user-images.githubusercontent.com/104086686/194729528-fb45a17e-1b4e-4cd2-b3d0-b81c0d3e5e2e.png)


