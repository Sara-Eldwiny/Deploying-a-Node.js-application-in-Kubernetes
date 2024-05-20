# Deploying a Node.js Application in Kubernetes

## Prerequisites

Ensure you have the necessary prerequisites installed and configured:

- Docker
- Kubernetes cluster (e.g., Minikube, Docker Desktop with Kubernetes enabled, or a cloud-based Kubernetes service)
- kubectl command-line tool

## Application Structure

The Node.js application consists of the following files:

- `index.mjs`: The main application file written in ES Modules format using Express.js.
- `package.json`: Configuration file specifying project metadata, dependencies, and start script.
- `Dockerfile`: Dockerfile for building the Docker image of the Node.js application.

## Steps

### 1. Create Node.js Application

Create a Node.js application with Express.js using the provided `index.mjs` and `package.json` files.

### 2. Dockerize the Application

Create a Dockerfile in the root of your project to package the Node.js application into a Docker container.

## Screenshots

### Include screenshots of the following:

   - Docker build process
     
   - Pushing Docker image to Docker Hub
     
   - Applying deployment and service manifests in Kubernetes
     
   - Accessing the deployed application in a web browser
   
