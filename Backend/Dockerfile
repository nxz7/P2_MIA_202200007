FROM node:20

WORKDIR /app

COPY package.json ./
RUN npm install
EXPOSE 3000
COPY . .
CMD [ "npm", "start" ]

### CREAR LA IMAGEN LOCALMENTE
### docker build --tag nxz7/backend-mia .


### CORRER LA IMAGEN docker run -p 3000:3000 nxz7/backend-mia 
### docker run -d --name=backend-mia -p 3000:3000 -e USUARIO='nxz7' -e PASSWORD='iwbwyfkm431430' -e PORT='3000' nxz7/backend-mia

### SUBIR LA IMAGEN A DOCKER HUB
### docker push nxz7/backend-mia