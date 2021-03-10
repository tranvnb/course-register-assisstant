# Getting Started with Docker and MongoDB

This project was using [Docker](https://www.docker.com/) and [MongoDB](https://www.mongodb.com/).

## Development

1. ### Install Docker to your system
2. ### Follow this link to pull MongoDB docker image to your local: https://hub.docker.com/_/mongo/

````shell
    $ docker pull mongo
    $ docker run --name mongo -p 27017:27017 -d mongo:latest
````
3. #### To stop or start docker container

````shell
    $ docker stop mongo
    $ docker start mongo 
`````

4. ### Download & Open [MongoDB Compass](https://www.mongodb.com/products/compass) for managing database. 