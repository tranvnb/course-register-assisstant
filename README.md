# Course Registration Assistant for Douglas College (Schedulify)

![image](https://user-images.githubusercontent.com/9379521/140168846-6bfb0456-033b-47f5-b1cf-35640b790508.png)


## Setup for Development Using Docker

1.  Download and Install [Docker](https://www.docker.com/get-started) on your System

2. Run the following command to get the project running

    a. This builds all the docker images and creates a volume for the host system
   
    ```
        docker-compose build
    ```


    b.  Once you've built all the images you can run them with
    ```
        docker-compose up -d
    ```

    NOTE: You only need to build images once unless there are new dependencies installed into each project

    c. To shut down all containers use
    ```
        docker-compose down
    ```
    
    You can also use this to delete all volumes
    ```
        docker-compose down -v
    ```



3.  Navigate to:

    a. http://localhost:3000 for the app

    a. http://localhost:8080 for the web service or api

    a. http://localhost:27017 for the database using [Robo3T](https://robomongo.org/) or [MongoDB Compass](https://www.mongodb.com/products/compass)

## Demo here: https://courses-registration.herokuapp.com

