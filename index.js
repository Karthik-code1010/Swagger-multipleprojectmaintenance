const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
// const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()

// app.use(express.static(pathToSwaggerUi))
var cors = require('cors');

app.use(cors());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      title: "Mathcur API",
      version: '1.0.0',
    },

  },
  apis: ["index.js"],

  
};
var options = {
    explorer: true,
    swaggerOptions: {
      urls: [
       
        {
          url: 'http://localhost:5002/apispec_1.json', //http://127.0.0.1:5006/apispec.json  ttp://localhost:5000/getjson
          name: 'Spec1'
        },
        {
            url: 'http://localhost:9000/autojson/swagger-output.json',   //http://localhost:9000/getjson
            name: 'Spec2'
          },
          {
            url: 'http://localhost:2900/books',
            name: 'Spec3'
          },
          {
            url: 'http://localhost:9500/sjson/swagger-output.json',
            name: 'Spec4'
          },
      ],
      
    }
  }
  
 

const swaggerDocs = swaggerJsDoc(swaggerOptions);
//app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs,options));



app.listen(8200, () => console.log("listening on 8200"));


