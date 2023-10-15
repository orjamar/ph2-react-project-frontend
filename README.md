# Book Catalog Online

This is a simple React web application that allows users to search for books using the Google Books API and add them to a book catalog. The project also incorporates client-side routing to navigate between different views.

## Features

- Search for books in the Google Books API catalog.
- Add books from the search results to your personal catalog.
- Navigate between the homepage and the book catalog using client-side routing.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installing](#installing)
- [Usage](#usage)
- [Built With](#built-with)
- [License](#license)

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.

### Installing

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd book-catalog-online
   ```

2. Install dependencies for the frontend:

   ```bash
   cd frontend
   npm install
   ```

3. Start the JSON server for the backend:

   ```bash
   json-server --watch db.json --port 3000
   ```

4. In a separate terminal, start the React application:

   ```bash
   npm start
   ```

The React application will launch in your default web browser.

## Usage

- You can search for books using the search bar on the "Add Book" page.
- Add books to your catalog by clicking the "Add to List" button.
- Navigate between the homepage and the catalog using the navigation links.

## Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/) - Declarative routing for React applications.
- [json-server](https://github.com/typicode/json-server) - A fake REST API for testing and prototyping.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
