###################
### Angular app ###
###################
# base image
FROM node:12.18.0
LABEL author="Ángel Oreste"
EXPOSE 4270

# set working directory
WORKDIR /app

# copy the content of the package.json to the container in order to install the dependencies for the project
COPY package.json /app/package.json

# install all the needed packages for Angular
RUN npm install

# start app
CMD npm start