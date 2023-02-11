# Netflix Clone

- **Checkout branch "Master" for frontend Netflix Clone with React Redux**


---

## Quick Links

- [Live Site Demo](https://netflix-kappa-roan.vercel.app/)

[Tech Stack](#tech-stack)

[Implementation Hightlights](#Implementation-Hightlights)

- [User Stories](#user-stories)

[Getting Started](#getting-started)

- [Prerequisites](#prerequisites)

  - [Tools & Versions](#tools-&-versions)

- [Serving Application](#serving-application)
  - [Web Client](#web-client)

[Deployment](#deployment)

[Author](#author)

[Acknowledgments](#acknowledgments)

---

## Demo

### Live Site Demo

Demo:  [Live Site Demo](https://netflix-kappa-roan.vercel.app/)

---

## Tech Stack

- [React](https://github.com/facebook/react) ∙ [Redux](https://github.com/reduxjs/redux)
  - web client & client data management
- [Node.js](https://github.com/nodejs) ∙ [Expressjs](https://github.com/expressjs/express) 
  - web server & services in service oriented architecure
- TMDB(api)
  - persisted database for movies
- mongoDB
  - persisted database for users
- Firebase
  - user authentication

---

## Implementation Highlights

- single page application web client with React & Redux
- service oriented architecure backend
- REST for client server communication,
- TMDB api for movies data,
- MongoDB for user's database,
- Firebase for user authentication

### User Stories

- users can register and log in to their account
- landing page has collections of movie for recommendations
- users can search for movies
- users can browse search result by pages
- users can select and view details of a movie
- users can play a movie(sample video added)
- users can add or remove movie to his/her wish list

## Getting Started

### Prerequisites

#### Tools & Versions

| Tools         |
| ------------- | 
| npm           | 
| nodejs        |
| mongoDB       |
| react-js      |
|redux          |


- install dependencies

```terminal
npm install 
``` 



### Serving Application

#### Movie Service

- dependent on TMDB API as data source


#### Web Client

- install dependencies & start application

```terminal
npm install
npm start
```

Application will be serving on http://localhost:3000

---

## Deployment

-  [Live Site Demo](https://netflix-kappa-roan.vercel.app/)

---

## Author

- Suraj Kumar

---

## License

This project is licensed under the MIT License - see the LICENSE file for details

---

