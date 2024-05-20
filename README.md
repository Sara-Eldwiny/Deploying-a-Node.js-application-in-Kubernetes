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
   - 
     ![photo_2024-05-20_16-07-39](https://github.com/Sara-Eldwiny/Deploying-a-Node.js-application-in-Kubernetes/assets/72985365/7b5e1349-84cb-41c3-bd87-62f6f166e99e)

   - Pushing Docker image to Docker Hub
     
     ![n](https://github.com/Sara-Eldwiny/Deploying-a-Node.js-application-in-Kubernetes/assets/72985365/3c53230e-44e1-4863-a4f3-63f2bd8e9948)
     
     ![nn](https://github.com/Sara-Eldwiny/Deploying-a-Node.js-application-in-Kubernetes/assets/72985365/96c6cf75-6553-4bfb-ab87-087b174103e0)
     
   - Accessing the deployed application in a web browser
   - 
   ![nnn](https://github.com/Sara-Eldwiny/Deploying-a-Node.js-application-in-Kubernetes/assets/72985365/aaee8153-4f1f-4027-a4cd-d6ce70ebae7a)

   ![nnnn](https://github.com/Sara-Eldwiny/Deploying-a-Node.js-application-in-Kubernetes/assets/72985365/dc5f986b-dc34-4d1b-9d65-42c7d5833524)


