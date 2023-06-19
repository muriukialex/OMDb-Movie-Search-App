# Movie Search Web App

This is a movie search web application that allows users to search for movies and view details about each movie. The app fetches data from the OMDb API to retrieve movie information and presents the results in a visually appealing and responsive manner.

## Features

-   Search: Enter a movie title in the search input field and click the search button to fetch movie data from the OMDb API.
-   Movie Details: View additional information about a movie, such as plot summary, cast, genre, etc., by clicking the "View Details" button.
-   Error Handling: Display a message if the API request fails or no results are found.
-   Responsive Design: The web app is designed to look and function well on different screen sizes.
-   Attractive User Interface: Styling elements such as typography, colors, and layout have been implemented to create an appealing UI.

## Figma Designs

To view this application's figma designs, see [here](https://www.figma.com/file/1ZmjqONKzVaIGTSECqMgsI/Movie-Search-Application?type=design&node-id=0%3A1&t=jScQFcssX3guiNF6-1)

## Bonus Features

In addition to the main features, the following bonus features have been implemented:

-   Pagination: Display multiple pages of search results, allowing users to navigate through the movie list.
-   Sorting: Sort search results by different criteria, such as rating or release date.
-   Additional API Integration: Include movie ratings or reviews from a different API, if available.

## How to Run Locally

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/muriukialex/OMDb---Movie-Search-App.git`
2. Install dependencies: `npm install`
3. Obtain an API key from the OMDb API website: [http://www.omdbapi.com/](http://www.omdbapi.com/)
4. Create a `.env.local` file in the root directory and add your API key: `NEXT_PUBLIC_API_KEY=<your-api-key>`
5. Start the development server: `npm run dev`
6. Open your web browser and visit: `http://localhost:3000`

## Screenshots

Here are some screenshots of the final web app:

![Screenshot 1](https://chat.openai.com/c/screenshots/screenshot1.png)
_Enter a movie title and click the search button to fetch results._

![Screenshot 2](https://chat.openai.com/c/screenshots/screenshot2.png)
_View movie details and additional information._

## Demo

You can also see a live demo of the web app at [https://example.com](https://example.com/).

## Technologies Used

The following technologies were used to build this web app:

-   HTML5 & CSS3
-   JavaScript
-   React.js
-   NextJS
-   OMDb API

## Author

-   [Alex Muriuki](https://github.com/muriukialex)

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit/).
