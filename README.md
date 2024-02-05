# OICT homework

## Installation & setup
- Clone this repository.
- Create a `.env` file with the following values:
  - `PORT`: Specify the desired port for the application.
  - `API_KEY`: API that is used for auth
- Choose one of the following ways to run the app:

### Local development environment setup
- If you have nvm installed, run `nvm use` to set the correct Node.js version.
- Install dependencies with `npm install`.
- Start the development server with `npm run dev`.

### Run App in Docker
- Ensure Docker is installed on your machine.
- Run `docker compose up -d` to start the application in detached mode.


The app will be accessible at `http://localhost:${PORT}`.

### Example of requests 

- Get card status: `curl -H "x-api-key: ${API_KEY}" http://localhost:${PORT}/status?cardNumber=123`
- Health check `curl http://localhost:${PORT}/health-check`


## Tests

- This project is covered with unit tests
- you can run them wih `npm run test`, if you want to see coverage you need to run npm `npm run test -- --coverage`

## OpenAPI
- you can access openAPI documentation of the API on `http://localhost:${PORT}/docs`

## code review
- jakou verzi node.js použít? (dá se poznat z Dockerfile)
- testy v server složce, je tomu přizbůsoben build?
- openapi je generovaná, jakou to má nevýhodu?
- hodil by se .env.sample
- proč chyby vrací plain text, ale /status vrací json?
- byl použit nějaký linter/formatter? hodilo by se mít konfiguraci v repu
- cardNumber měl být url parametr, ne query parametr
- proč /status? čeho status?

