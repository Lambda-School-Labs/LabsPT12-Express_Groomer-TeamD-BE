# express-groomer-be

For steps on how to work with this repository [please see here](https://docs.labs.lambdaschool.com/labs-spa-starter/)

# Project

You can find the deployed project at [https://labspt12-express-groomer-d-api.herokuapp.com/].

## Contributors

|                                         [Angela Williams](https://github.com/Techgawd/)                                          |                                        [Anthony Hernandez](https://github.com/asvka)                                        |                                        [Candace Wilson](https://github.com/candaceyw)                                         |                                          [Fnu Milat](https://github.com/fnumilat)                                           |                                             [Sheila Moore](https://github.com/Sherexmykes)                                             |
| :------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: |
|   [<img src="https://ca.slack-edge.com/ESZCHB482-W0123RKDZ2B-50f121d8aa14-512" width = "200" />](https://github.com/Techgawd/)   |  [<img src="https://ca.slack-edge.com/ESZCHB482-W012H6PRCNR-d8bc9d81cee8-512" width = "200" />](https://github.com/asvka)   | [<img src="https://ca.slack-edge.com/ESZCHB482-W012QNU9NJ0-3b7b0c744aaf-512" width = "200" />](https://github.com/candaceyw/) | [<img src="https://ca.slack-edge.com/ESZCHB482-W012H6PJX6H-a2894fe0ade8-512" width = "200" />](https://github.com/fnumilat) |     [<img src="https://ca.slack-edge.com/ESZCHB482-W0123RJ35GX-c2cc2e909962-512" width = "200" />](https://github.com/Sherexmykes)     |
|                      [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Techgawd/)                      |                     [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/asvka)                      |                    [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/candaceyw)                     |                    [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/fnumilat)                    |                        [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Sherexmykes)                        |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/williams-angela/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](www.linkedin.com/in/anthony-m-hernandez) |  [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/candaceyw/)   | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/fnu-milat/)  | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/sheila-moore-6829aa10/) |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![node express](https://img.shields.io/node/v-lts/express)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

### Key Features

- Account Creation and Login
- Search Groomer Database
- User Profile
- Enhanced Groomer Search
- Appointments/ Scheduling
- Payment Services
- Groomer Rating System

#### Back end deployed to `https://labspt12-express-groomer-d-api.herokuapp.com/`

#### [Back end](https://github.com/Lambda-School-Labs/LabsPT12-Express_Groomer-TeamD-BE) built using:

#### Node.js, @okta/jwt-verifier, axios, cookie-parser, cors, debug, dotenv, eslint, express, faker, helmet, http-errors, knex, morgan, pgadmin, swagger-jsdoc, swagger-ui-express

# APIs

## Authentication API here

🚫Replace text below with a description and link to your API swagger docs

Water's like me. It's laaazy ... Boy, it always looks for the easiest way to do things A little happy sunlight shining through there. Let all these little things happen. Don't fight them. Learn to use them. Even the worst thing we can do here is good.

## Payment API here

🚫Replace text below with a description of the API or delete

This is the way you take out your flustrations. Get away from those little Christmas tree things we used to make in school. Isn't it fantastic that you can change your mind and create all these happy things? Everything's not great in life, but we can still find beauty in it.

## Misc API here

🚫Replace text below with a description of the API

You can do anything your heart can imagine. In life you need colors. This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. I'm sort of a softy, I couldn't shoot Bambi except with a camera. Trees get lonely too, so we'll give him a little friend. We'll lay all these little funky little things in there.

## Getting Started

### Enviornment Variables

- `PORT` - API port (optional, but helpful with FE running as well)
  - The following ports are whitelisted for use with okta
    - 3000
    - 8000
    - 8080
- `DATABASE_URL` - connection string for postgres database
- `OKTA_URL_ISSUER` - The complete issuer URL for verifying okta access tokens. `https://example.okta.com/oauth2/default`
- `OKTA_CLIENT_ID` - the okta client ID.

See `.env` file for example values

### Setup postgres

There are 3 options to get postgresql installed locally [Choose one]:

1. Use docker. [Install](https://docs.docker.com/get-docker/) for your platform
   - run: `docker-compose up -d` to start up the postgresql database and pgadmin.
   - Open a browser to [pgadmin](http://localhost:5050/) and you should see the Dev server already defined.
   - If you need to start over you will need to delete the folder `$ rm -rf ./data/pg` as this is where all of the server data is stored.
     - if the database `api-dev` was not created then start over.
2. Download and install postgresql directly from the [main site](https://www.postgresql.org/download/)
   - make note of the port, username and password you use to setup the database.
   - Connect your client to the server manually using the values previously mentioned
   - You will need to create a database manually using a client.
   - Make sure to update the DATABASE_URL connection string with the values for username/password, databasename and server port (if not 5432).
3. Setup a free account at [ElephantSQL](https://www.elephantsql.com/plans.html)
   - Sign up for a free `Tiney Turtle` plan
   - copy the URL to the DATABASE_URL .env variable
   - make sure to add `?ssl=true` to the end of this url

### Setup the application

- create your project repo by forking or using this as a template.
- run: `npm install` to download all dependencies.
- confirm correct env variables in your `.env` file.
- run: `npm run knex migrate:latest` to create the starting schema.
- run: `npm run knex seed:run` to populate your db with some data.
- run: `npm run tests` to confirm all is setup and tests pass.
- run: `npm run watch:dev` to start nodemon in local dev enviornment.

> Make sure to update the details of the app name, description and version in
> the `package.json` and `config/jsdoc.js` files.

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Documentation

See [Backend Documentation](🚫*link to your backend API SWAGGER DOCS here*) for details on the backend of our project.
