# frontend/Dockerfile
FROM node:20-bullseye-slim AS build

RUN mkdir /project
WORKDIR /project

RUN npm install -g @angular/cli@19

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN apt-get update && apt-get install -y --no-install-recommends git

RUN useradd -s /bin/bash -m vscode &&  groupadd docker && usermod -aG docker vscode

# install Docker tools (cli, buildx, compose)
# COPY --from=gloursdocker/docker / /

CMD ["ng", "serve", "--host", "0.0.0.0"]