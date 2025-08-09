# GitHub User Search

A React application that allows users to search for GitHub profiles using the GitHub API.

## Features

- Search for GitHub users by username
- View user profile information including avatar, name, and GitHub link
- Clean, modern UI with loading states and error handling
- Responsive design that works on all devices

## Tech Stack

- React
- Vite
- React Router
- Axios for API calls
- GitHub API integration

## Getting Started

1. Make sure you have Node.js installed
2. Clone the repository
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/     # React components
│   └── Search.jsx  # Main search component
├── services/       # API services
│   └── githubService.js  # GitHub API integration
├── App.jsx         # Main application component
└── index.css       # Global styles
```
