# News App

This is a News App built with React and Vite. It fetches the latest news articles based on the user's search query and displays them in a user-friendly interface.

## Project Structure

```
reactProject/
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── public/
├── README.md
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── components/
│   │   ├── loader/
│   │   │   ├── loader.css
│   │   │   ├── loader.jsx
│   │   ├── logo.jsx
│   │   ├── Navbar.jsx
│   │   ├── NewsBoard.jsx
│   │   ├── NewsItem.jsx
│   ├── style.css
│   ├── index.css
│   ├── main.jsx
├── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/react-news-app.git
    cd react-news-app
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your News API key:

    ```sh
    VITE_API_KEY=your_news_api_key
    ```

### Running the App

To start the development server, run:

```sh
npm run dev
```

### Building for Production

To create a production build, run:

```sh
npm run build
```

### Linting

To lint the code, run:

```sh
npm run lint
```

## License

This project is licensed under the MIT License.



