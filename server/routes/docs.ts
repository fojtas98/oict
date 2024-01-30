import swaggerJSDoc from "swagger-jsdoc"

  const options = {
    definition: {
      openapi: "3.0.1",
      info: {
        title: "REST API for Swagger Documentation",
        version: "1.0.0",
      },
      schemes: ["http"],
      servers: [{ url: `http://localhost:${process.env.PORT}/` }],
    },
    apis: [
      `${__dirname}/*ts`,
    ],
  };

export default swaggerJSDoc(options);