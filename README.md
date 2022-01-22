# Car Dealership (Admin console)

Application requires user's login, Enter any username/password to proceed.
All other routes are protected. So make sure you are logged-in to see the following features.

## Features

- Login
- Dashboard
- List
- Details (dummy page added)

## Tech

React v17.0.2 with typescript

## Installation

Application requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server.

```sh
npm i
npm start
```

## Plugins

List of installation commands used to download the plugins

npx create-react-app assessment --template typescript
npm i react-router-dom
npm i react-router
npm i react-content-loader
npm i react-custom-scrollbars
npm i --save-dev @types/react-custom-scrollbars
npm install @emotion/react @emotion/styled
npm i node-sass
npm i reactstrap
npm i bootstrap

## Deployment

Have added .yml file (assuming deployment will happen thriugh gitlab) and also included test phase where it runs test cases prior to deployment. (test cases are not written).
Using ngnix server inside Docker container for CI/CD deployment.
For more info reffer .gtilab.yml and Docker files
