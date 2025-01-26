# Nooro Todo Backend 

## Overview
A robust backend service for a todo application built with Express.js API, Prisma ORM & TypeScript.

## Features
- Create, read, update, and delete tasks
- Task completion tracking
- Persistent data storage

## Prerequisites
- Node.js (v18+)
- PostgreSQL
- Prisma
- Docker (optional)

## Installation

### Local Setup
1. Clone the repository
   ```bash
   git clone [repository-url]
   cd todo-backend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure environment variables
   Create a `.env` file with:
   ```
   DATABASE_URL=
   ```
   ![alt text](./src/img/mysql-connection-string-example.png)

4. Set up database
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. Run the application
   ```bash
   npm run dev
   ```

## API Endpoints

### Todos
- `POST /api/todos`: Create a new todo
- `GET /api/todos`: Retrieve all todos
- `PUT /api/todos/:id`: Update a specific todo
- `DELETE /api/todos/:id`: Delete a specific todo

### Authentication
- `POST /api/auth/register`: User registration
- `POST /api/auth/login`: User login

## Testing
```bash
npm run test
```

## Deployment
- Recommended platforms: Vercel, Heroku
- Ensure environment variables are configured

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push and create a pull request