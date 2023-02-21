# ideal-succotash

## Description
A WEB API application that exposes a single client endpoint.
The endpoint returns a *fancy* string based on the input parameter (`fancyNumber`):
  * - If the `fancyNumber` is a multiple of 3 - return "G",
  * - If the `fancyNumber` is a multiple of 5 - return "N",
  * - If the `fancyNumber` is a multiple of both 3 and 5 - return "GN";
  * - Otherwise return the provided `fancyNumber`.

## Before getting started
The application is not intended to be run publicly on production.

## Getting started
Run the following commands:
1. Install dependencies: `npm install`;
2. Start application: `npm start`;
The application is running on `http://localhost:80` and contains a single endpoint:
- [GET] `http://localhost:80/{fancyNumber}`, where `fancyNumber` is an integer.

## Documentation
`Swagger` is used to demonstrate the API documentation.
When application is running, visit `http://localhost:80/api-docs` from your broser to view the documentation.

## Testing
Run unit tests by command in console: `npm test`.

### Tools
- Web app framework - [express](https://expressjs.com/)
- API documentation - [swagger ui](https://swagger.io/tools/swagger-ui/)
- Test framework - [jest](https://jestjs.io/)
- Requests validation - [celebrate](https://github.com/arb/celebrate#readme)

### Area for improvements
- Auto restart - [nodemon](https://www.npmjs.com/package/nodemon)
- Logging - [morgan](https://www.npmjs.com/package/morgan)
- Process managing - [pm2](https://pm2.keymetrics.io/)