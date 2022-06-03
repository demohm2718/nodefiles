# FullStack Dev Bootcamp
## Business Logic and Persistence Layers

### Node.js Intro
**Intro**
- Node is very easy to install.
**NPM CLI**
- I had issues because I was using an outdated practice of `const chalk = require('chalk');`.
**NPM Scripts**
- Here, we created `chalktest.js` and installed a package called "chalk" by using `npm install chalk`.
This package writes dynamic command line outputs.
We made it output some red and blue fonts with varying messages.
To execute it, we used `node chalktest.js`.
**Serve static HTML files**
- We also learned how to serve static HTML files by using `node http_server.js`, which served up `index.html`.

### MongoDB
**Installation**
- Installing was tricky as I couldn't run the CLI for MongoDB.
I found out that the issue was me creating a folder in the wrong place.
I needed to create a folder `/data/db` (Note that this is the full path).
Instead, I created this folder within one of my home folders such that i made `~/Dev/data/db`, which threw an error that made it so mongo didnt stay running.
Upon further investigation, I noticed within the error it wrote that it couldn't find `/data/db`.
Thus, coming to the conclusion that I misplaced the folder.
When I ran `mongo` in a new terminal, it ran perfectly, showing the default db that comes with mongo called `test`.

**Databases**
- To initiallize the mongo shell, use `sudo mongo`.
- We create new databases with the `use` command, such as `use contacts` which creates a database called `contacts`. Instead of tables, Mongo uses *collections*.
create collection
: db.createCollection("SomeCollectionName")
Use `show collections` to verify it was created.

Let `db.createCollection("MyContacts")`.
insert item
: `db.MyContacts.insert({ someItems: 'someVal' }) `
search item
: `db.MyContacts.find()`


## Web Communications Layers
### Node.js Frameworks
Node.js is beneficial in that it is:
- Scalable
- Async
- Faster code exec
- Single threaded

Frameworks include
1. Express.js
- Web & Mobile apps.
- Strong HTML functionality => faster and simpler API dev.
- Part of the **MEAN** stack.
**M**ongoDB
**E**xpress.js
**A**ngularJS
**N**ode.js

2. Koa.js
- Same as Express but lighter weight, smaller footprint.
- ECMAScript 6
- Generators -> start/resume code exec w/in stack

3. Meteor
- Full-stack, open-source
- Natively *M*odel *V*iew *C*ontroller framework

#### Express.js
First, we go into our project folder and exec `sudo npm init`, which creates a `package.json` file.
Had its *entry point* point to `http_server.js`.
Then, the video did `sudo npm install express --save`.
Installed body-parser with `sudo npm install body-parser`.

To check HTML verbs w/ the server, we use a **REST Client** plugin for the Firefox browser.
- Within `http_server.js`, we use the REST client to pass in values for `empName` and `weight` using the POST method into `http;//localhost:8000`

### NoSQL Storage using Node.js
Created `myApp.js`.
The goal is to connect a SQL database by using Node.
What they *didn't* tell me was that i needed to `npm install mongodb` so that importing it in `myApp` is successful.
The `MongoClient` is what connects us to our MongoDB by passing our connection URI into it.
We created a new instance of `MongoClient` using `mclient` and using the clients functions to `.connect()` with database.

### Routing in Express
We're modifying `http_server.js` again to use express.
We are taking advantage of the `Router` module within express to handle routing.
