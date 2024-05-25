# Dockerized API with Kubernetes Deployment

This project is a Dockerized API application that is ready for deployment on a Kubernetes cluster. It uses Express and Sequelize to manage a list of todos, but the main focus is on containerization and orchestration.

## Prerequisites

Before deploying the application, make sure you have created a kubernetes secret named `postgres-secret`. This secret should contain the password for the PostgresSQL database in a key `POSTGRES_PASSWORD`

## Project Structure

\\\`
.gitignore
api/
    .dockerignore
    db/
        index.js
        Todo.js
    Dockerfile
    index.js
    package.json
k8s/
    api.yaml
    config.yaml
    db.yaml
\\\`

## Getting Started

1. Build the Docker image:

\\\`sh
cd api
docker build -t my-app:1.0 .
\\\`

2. Deploy the application on Kubernetes:

\\\`sh
kubectl apply -f k8s/
\\\`

## Docker

The Dockerfile in the api directory describes how to build a Docker image for the application. The .dockerignore file lists the files and directories that Docker should ignore.

## Kubernetes

The k8s directory contains Kubernetes configuration files for deploying the application and its associated services.

## API Endpoints

- GET /heartbeat: To test the api is running and alive
- GET /todos: Fetch all todos.

## Database

The database is managed by Sequelize. The Todo model is defined in [api/db/Todo.js](api/db/Todo.js).
