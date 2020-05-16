## Libraries that are recommended to use for better development

1. [Sequelize](https://github.com/sequelize/sequelize) as ORM for Relational Databases
2. [Mongoose](https://github.com/Automattic/mongoose) to use Mongo DB
3. [Express Validator](https://express-validator.github.io/docs/) to validate params

## File structure

- Folders under `backend-api` are separated according to _MVC_;
  `models`, `routes`, `services` and `controllers` folders are base domain folders for every project. If using `Sequelize` then there will be another folder named `migrations` to store db migrations

- For a sample reference a file is present in all the above folders.

- All folder names should be using `kebab-case` independent from what they contain.

- Use `swagger.json` to design the API's an see them in action at `/api-docs`

#

## Available Scripts

In the project directory, you can run:

### `yarn start:dev`

Runs the app in the hot-reload development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the postman to develop the API's.

The changes will automatically reflect on saving them.

### `yarn start`

Runs the app in the normal development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the postman to develop the API's.
