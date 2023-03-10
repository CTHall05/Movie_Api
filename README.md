# Movie API React App

This is a Movie API React App built to search for movies using the OMDb API.

# How to Run the App
To run this app on your local machine, follow these steps:

Clone this repository using git clone https://github.com/CTHall05/Movie_Api.git

In the terminal, navigate to the project directory and run: 

```
npm install 

```

to install the required dependencies.

Obtain an API key from OMDb API and add it to the API_URL constant in the App.js file.

Run in your chosen code editor's terminal:

```
npm start 
```

to start the app.

Open http://localhost:3000/ in your browser to view the app.

How to Use the App
Enter a search term in the input field.
Click the search icon or press Enter to search for movies.
The search results will be displayed in movie cards.
Click on a movie card to view more details about the movie.
App Structure
The App.js file is the main file of the app. It contains the App component which renders the search bar and the movie cards.

The MovieCard component is used to display individual movies in a card format. It receives a movie prop which contains the details of the movie.

The app uses the useEffect and useState hooks from React to manage the state of the app. The useEffect hook is used to search for movies on load, and the useState hook is used to manage the search term and the list of movies.

Contributing
Contributions to this project are welcome. If you find a bug or have a feature request, please create an issue on the GitHub repository or submit a pull request.

License
This project is licensed under the MIT License.
