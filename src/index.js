const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const handlers = require('./handlers');

const PORT = 80;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/:fancyNumber', handlers.getVendorString.validator, handlers.getVendorString.handler);

app.use(errors());

app.listen(PORT, () => {
  console.log(`Web server listening on port ${PORT}`);
});