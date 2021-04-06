# Project guidelines

Assumingly that you have already installed Nodejs and Npm to your working environment. If you have not, you can find resource in **References.md**.

## I. Setup database

Make sure you have installed mongo database on your local environment. 

If you haven't please follow the instruction on course-registration-assistant-database/README.md to install and start mongo docker.

````
    $ cd course-registration-assistant-database
    $ npm install
    $ mongo scripts/courses.js
````

This will create a database named **courses-management** and a collection named **courses** in your mongo database server.

## II. Setup Back-End Web service

````
    $ cd course-registration-assistant-ws
    $ npm install
    $ touch .env
````

Copy and paste this setting to the **.env** file

````
    MONGO_URI=mongodb://localhost:27017/courses-management
    PORT: 8080
````

Start webservice:
````
    $npm run start
````

Note the service Uri and port on which it is listening (should be *http://localhost:8080* - No ending forwards slash)

## III. Setup and run Front-End Web service

````
    $ cd course-registration-assistant-app
    $ npm install
    $ touch .env
    $ echo REACT_APP_WEB_SERVICE_URL=http://localhost:8080 > .env
    $ npm run start
````
