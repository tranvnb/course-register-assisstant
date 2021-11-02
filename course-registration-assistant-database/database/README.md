1. Download the courses file and save the html file to directory `data`
2. Run the scraping script
   ```
       node index.js
   ```
3. Login to mongo server using `mongosh`
   ```
       $ mongosh "mongodb+srv://<username>:<password>@cluster0.3jpcg.mongodb.net/courses-management?retryWrites=true&w=majority"
   ```
4. Open a different terminal and run the `mongoimport`
   ```
    ~/bin/mongo/mongoimport --drop --verbose --jsonArray --collection courses "mongodb+srv://<username>:<password>@cluster0.3jpcg.mongodb.net/courses-management?retryWrites=true&w=majority" ./data/result.json
   ```
