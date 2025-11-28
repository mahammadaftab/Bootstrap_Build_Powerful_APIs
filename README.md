# Bootstrap_Build_Powerful_APIs

A beginner-friendly project to learn how to build powerful APIs using Express.js.

## Overview

This project demonstrates the fundamentals of API development with Node.js and Express. It includes a simple REST API server that can be extended with additional endpoints and functionality.

## Project Structure

```
Bootstrap_Build_Powerful_APIs/
├── README.md
└── Assignment/
    ├── index.js
    ├── package.json
    └── node_modules/
```

## Features

- Express.js server setup
- GET endpoint example (`/hello`)
- JSON response handling
- Simple and clean code structure

## Installation

1. Navigate to the Assignment directory:
   ```bash
   cd Assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

To start the server, run:

```bash
node index.js
```

The server will start on `http://localhost:3000`

### API Endpoints

**GET /hello**
- Returns a greeting message
- Response:
  ```json
  {
    "message": "Hello API!"
  }
  ```

## Requirements

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Dependencies

- **express** (^5.1.0) - Fast, unopinionated web framework for Node.js

## Learning Objectives

- Understand how to set up an Express server
- Learn the basics of routing in Express
- Handle HTTP requests and responses
- Build RESTful API endpoints

## Next Steps

- Add more endpoints to extend functionality
- Implement POST, PUT, DELETE methods
- Add error handling middleware
- Create a database integration
- Add request validation

## License

ISC
