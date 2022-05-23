# Rancid Tomatillos

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About the Project</a></li>
    <li><a href="#set-up">Set Up</a></li>
    <li><a href="#operating-instructions">Operation Instructions</a></li>
    <li><a href="#application-in-action">Application in Action</a></li>
    <li><a href="#contributors">Contributors</a></li>
    <li><a href="#technologies-used">Technologies Used</a></li>
    <li><a href="#organizational-resources">Organizational Resources</a></li>
    <li><a href="#cypress-testing">Cypress Testing</a></li>
    <li><a href="#future-goals">Future Goals</a></li>
  </ol>
</details>

### About the Project

This application was build to showcase and expand upon our teams knowledge of React, Router, and Cypress testing. This app is a simple and intuitive movie rating site. It display a section of information for each movie and allows the user to favorite the movies they like. All information is puled from an open API and our favorite movie selections are stored on a locally run API we built with express micorservice. Go ahead and clone down the needed repos to play the application and see it in action!

## Set Up
To set up this project please follow the instruction below.

1. Please start by cloning down this repo to your local machine and cd into the directory.
2. Once inside the directory run npm i. 
3. Run npm start and you will see a message displaying which localhost port the app is running on. If it does not automatically open in the browser, please navigate to the localhost address provided in your terminal.
4. Clone down our backend microservice express Api [here](https://github.com/laytonmaes/RancidTomatilloRepo).
5. cd into the micro service directory and run npm init --yes, then run npm i express --save.
6. Then run node server.js and the server will now be running locally.
7. Both local servers should now be running and you can freely navigate the application.

## Operating Instructions

1. Once the application is running in the browser you will intially see a dashboard with all the available movies displayed as cards.
2. You can click any card to be routed to the movie details dashboard. It will display extended information about the movie.
3. If the movie you clicked on it a movie you like, you can click the 'Add to Favorites' button to add it to the favorites section. The button will then be disabled and the text will change to 'In Your Favorites'
4. You can then at any time click the 'Home' button in the navbar to return to the main dashboard. 
5. You may also click the 'Favorited Movies' button in the navbar to take you to the favorite movies dashboard. This will display all of your favorite movies as cards 
5. From the favorites dashboard you can click any card to take you to the movie detiails dashboard.

## Application in Action

This gif displays the navigation of the app as well as adding movies to favorites.
![Rancid-Tomatillos](https://user-images.githubusercontent.com/92230099/169898817-986acac1-4114-4072-be14-d223722ebb97.gif)

## Contributors

### [Dylan Duke](https://github.com/laytonmaes)

### [Daniel Neer](https://github.com/DanielN88)

### Project Manager - Kayla Gordon

## Technologies Used

1. JavaScript
2. HTML
3. CSS
4. React
5. Router
6. Cypress
7. Webpack
8. Clip Studio Paint
9. NPM
10. Figma and Figjam

## Organizational Resources

This project utlizes a simple and concise [figjam board](https://www.figma.com/file/3AeR3Bu718CyO5vcOZlxOc/Rancid-Tomatillos?node-id=0%3A1) to create an intial project board during the planning phase that was transfered over to [GitHubs project board](https://github.com/DanielN88/rancid-tomatillos/projects/1).  

![Screen Shot 2022-05-23 at 12 30 02 PM](https://user-images.githubusercontent.com/92230099/169893023-051f2219-883c-4786-8390-bc7298db0d45.png)

![Screen Shot 2022-05-23 at 12 32 51 PM](https://user-images.githubusercontent.com/92230099/169893055-5cc06b48-11f8-490f-8f80-fff7b8009667.png)

The team then used figma to design a [wireframe](https://www.figma.com/file/3f4pp5R8kNXGZjxU0XmEAo/rancid-tomatillos?node-id=0%3A1) for all of our different dashboard views. 

![Screen Shot 2022-05-23 at 12 33 51 PM](https://user-images.githubusercontent.com/92230099/169893102-62dc0256-4e06-48db-b5d1-7c6d13d9cb80.png)

## Cypress Testing

We tested our application with Cypress for full E2E testing. To set up Cypress please follow the instructions below. 

1. Cd into the rancid-tomatillos directory.
2. Run npm i -D cypress.
3. Then run npm run cypress

We have three testable specs and each are testing there own dashboard. Please run the specs within cypress and they are titled dashboard_spec.js, favorite_dashboard_spec.js, movie_details_spec.js.

## Future Goals

1. Add the ability to delete movies from favorites.
2. Deploy both the application and our backend microservice server. 
3. Add in a youtube movie trailer link to each movie detail dashboard.