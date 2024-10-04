// lib/swagger.js

import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'API documentation for my Next.js app',
    },
  },
  apis: ['./pages/api/**/*.js'], // Đường dẫn đến các tệp API
};

const swaggerSpecs = swaggerJsDoc(options);

const setupSwagger = (app) => {
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
};

export default setupSwagger;
