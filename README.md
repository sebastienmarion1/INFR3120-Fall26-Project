# INFR3120-Fall26-Project

Website link: https://campus-food-guide.onrender.com/

The Campus Food Guide is hosted on Render as a Node Web Service connected to the main branch of our GitHub repository, with the default settings except:

Build command: npm ci.

Start command: npm start.

## Features

Homepage with logo
Form to add food spot
Table showing the name, location, food type, price range, and rating
Foot spots stored in MongoDB Atlas
Deployed on Render

## Team Contributions

Sebastien Marion: Created the homepage and logo, connected the homepage link to the add form, and configured Render deployment.
Roger Torriero: Created the food spot database, add form, and Express routes for creating food spots.
Zuriel Tolibas: Created the homepage listing table and connected the listing to MongoDB.

## Running Locally

Cloned the repository
Ran npm install
Created a .env file in the project root containing:

Ran npm start
Opened http://localhost:3000

Excluded the .env file because it has the credentials

## References

We used the Express Generator method demonstrated in class to create the project with EJS views.
We referenced the MEAN Stack Development lecture for Express routes, rendering EJS views, and serving files from the public folder.
We referenced the MongoDB slides and the CRUD Part-1 class example for connecting to MongoDB with Mongoose and defining a model.
We referenced the lecture INFR3120U - Monday Lecture - 2026/11/16 16:58 EST - Recording and its code examples for displaying database records in an EJS table and using GET and POST routes to display a form and save submitted data.
Our team logo was created by Sebastien in PowerPoint.