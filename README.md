# Project Goldstone

## Table of Contents

- [Purpose](#purpose)
- [Tech stack](#tech-stack)
- [Task list](#task-list)
- [Features](#features)
- [Build process](#build-process)

## Purpose

This project covers the basics of creating a mostly static website from scratch. The languages involved in building this website are HTML, CSS, Bootstrap 4, and JQuery.


## Task List

- [x] Create a prototype of the site using InVision Studio
- [ ] Create separate files for the header, navigation bar, and footer elements to be repeated on each page
- [ ] Create the home page :tada:
- [ ] \(Optional) Create Jira feature tickets

<!-- use html comment style -->

<a name="tech-stack"/> <!-- anchor tag is not necessary. useful for specifying location within document in TOC -->
## Tech stack

- HTML5
- CSS3
- Bootstrap 4
- JQuery

## Features

- Feature 1
- Feature 2
- Feature 3

## Build Process

| Step | Description |
| :---: | :--- |
| 1 | In this order, install and setup git, node.js and npm on your local machine. |
| 2 | Now do this second step. |
| 3 | Pay **special** ***attention*** to *this* **last _step_**. |

**STEP 1:** INSTALL GIT, NODE.JS AND NPM

In this order, install and setup git, node.js and npm on your local machine.

- Download and install git on your local machine
- Download and install Node.js version 16.13.2
    - NPM is automatically installed when you install Node.js
    

**STEP 2:** VERIFY INSTALLATIONS

Type each of the following at the command prompt, separately.
```
$ git version
$ node -v
$ npm -v
```

**Output**

- git version 2.34.1   *# your version may differ*
- v14.17.5
- 6.14.14

**STEP 3:** INSTALL NPM LITE-SERVER

- The following command installs a node.js-based development web server. This web server is for development and testing purposes only.
    - The **--save-dev** flag means that it will not be included in the final build files.
    - See [here](https://github.com/johnpapa/lite-server) for more details about lite-server.

```
$ npm install lite-server --save-dev
```
- To run: # The next step will add this command to the scripts in package.json
```
$ lite-server
```

- Add lite-server to package.json
```json
{
  "name": "BudgetCents",
  "version": "0.0.1",
  "description": "BudgetCents is a no-frills web app for managing your monthly finances",
  "main": "index.html",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npm run lite",
    "lite": "lite-server"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/waynethompsonjr/bootstrap-portfolio-project.git"
  },
  "author": "Wayne Thompson",
  "license": "ISC",
  "devDependencies": {
    "lite-server": "^2.6.1"
  }
}
```

**STEP 4:** START THE DEVELOPMENT WEB SERVER

The following command calls the **_start_** script inside package.json. The **_start_** script will execute *$ npm run lite*.
```
$ npm start
```

**STEP 5:** INSTALL JQUERY, POPPER AND BOOTSTRAP

- Since this website uses Bootstrap 4, it is necessary to leverage jquery. 
- Additionally, Bootstrap 4 semi-requires popper.js for tooltips, popovers, dropdowns and modals.
- Last, instead of calling Bootstrap via CDN, I have chosen to install it. You can skip this if you prefer.

```
$ npm install jquery@3.5.1 popper.js@1.16.1
$ npm install bootstrap@4.5.2
```

- Modify the package.json file as follows:
```json

```


## :no_entry_sign: Limitations

- **Working forms** :pencil2:
    - Though the first iteration of the website was built to be responsive, with a mobile-first philosophy, it currently lacks many interactive features commonly found in modern webpages. It is a static website and the form fields are not functioning yet. The form's do not have the capability to capture, store, or retrieve data from users yet.

## Documentation
- [Confluence](https://budgetcents.atlassian.net/wiki/spaces/BUDGETCENT/overview?homepageId=33219)
- [Jira](https://budgetcents.atlassian.net/jira/software/c/projects/BUD/boards/1)