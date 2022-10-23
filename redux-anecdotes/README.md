
Redux Example with Anectode
This initial list of anecdotes is stored in the file `db.json`. This file is used by the tool `JSON Server` that acts as a backend server where the data are stored.
To start an application, do the following :
```bash
#  step 1 Install dependancies
$ npm install
# step 2 Start the backend JSON server
$ npx json-server --port 3001 --watch db.json

# step 3 Start the application
$ npm start
```
You can then access the app on : [http://localhost:3000/](http://localhost:3000/)
You can also see the content of the JSON Server by heading to http://localhost:3001/anecdotes