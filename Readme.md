# Dockerized API with Kubernetes Deployment

This project is a Dockerized API application that is ready for deployment on a Kubernetes cluster. It uses Express and Sequelize to manage a list of todos, but the main focus is on containerization and orchestration.

## Useful links for evaluation:

Repository Link: [SachinArya027/k8s-assignment](https://github.com/SachinArya027/k8s-assignment)

Docker Image for api: [sachinarya/k8s-api](https://hub.docker.com/repository/docker/sachinarya/k8s-api/general)

Screen Recording: #todo

For database Postgres standard image is used

For metrics-server.yaml, standard [yaml](https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml) with custom changes is used 



## Prerequisites

Before deploying the application, make sure you have created a kubernetes secret named `postgres-secret`. This secret should contain the password for the PostgresSQL database in a key `POSTGRES_PASSWORD`

```apiVersion: v1
kind: Secret
metadata: 
  name: postgres-secret
type: Opaque
data:
  POSTGRES_PASSWORD: [Base 64 encoded Password Here]
```

## Additional Prerequisites for Load Testing

To simulate high load on the API and observe the Horizontal Pod Autoscaler (HPA) in action, this project includes a script named extraload.sh. This script uses the Apache HTTP server benchmarking tool, ab, to generate a large number of requests to the API. ([Refer Apache docs](https://httpd.apache.org/docs/2.4/programs/ab.html))

Once ab is installed, you can run extraload.sh to generate load on your API pods and see the HPA in action.

## Getting Started

1. Build the Docker image:

```sh
cd api
docker build -t sachinarya/k8s-api .
```

2. Deploy the application on Kubernetes:

```sh
kubectl apply -f k8s/
```

## Docker

The Dockerfile in the api directory describes how to build a Docker image for the application. The .dockerignore file lists the files and directories that Docker should ignore.

## Kubernetes

The k8s directory contains Kubernetes configuration files for deploying the application and its associated services.

## API Endpoints

- GET /heartbeat: To test the api is running and alive
- GET /todo: Fetch all todos.
- GET /todo/:id: Fetch specific todo
- POST /todo: Create a new todo
- DELETE /todo/:id: Delete a todo
- GET /extraload: Dummy endpoint to exploit system resources

## Database

The database is managed by Sequelize. The Todo model is defined in [api/db/Todo.js](api/db/Todo.js).
