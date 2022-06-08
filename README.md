# Agro Rent (Frontend)

## Overview

This portal allows users to view available agricultural equipments in their area (using pincode) and rent them.

## Tech Stack

**Client :** React, Axios, Bootstrap, React-router v6

**Server :** Express, Prisma, PostgreSQL

## Features

- Simple bootstrap UI
- Area-wise availability using pincode
- Scalable database using Postgres
- Rent and view products

## Run Locally

- Clone the project

```bash
git clone https://github.com/theanujdev/agro-rent-frontend
```

- Go to the project directory

```bash
cd agro-rent-frontend
```

- Install dependencies

```bash
yarn install
```

- Update constants in _src/config/index.ts_ file :

  `SERVER_URL`

- Start the server

```bash
yarn start
```

> **Note:** You need to run [Agro Rent Backend](https://github.com/theanujdev/agro-rent-backend) server in the background.

## Optimizations

Project structure is optimized for scalability. Along with react components and pages, context hook for global state, react-router routing, axios for API requests have also been used.

## Feedback

If you have any feedback, please reach out at [@theanujdev](https://twitter.com/theanujdev)

## Authors

- [@theanujdev](https://www.github.com/theanujdev)

## License

[MIT](https://choosealicense.com/licenses/mit/)
