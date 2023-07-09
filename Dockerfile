# Stage 1: Build the Angular app
FROM node:14 as build

WORKDIR /app

# Copy package.json files to the container
COPY package.json /app/

# Install project dependencies
RUN npm install --force

# Copy the entire project to the container
COPY . /app/

# Build the Angular app
RUN npm run build --prod

# Stage 2: Serve the built application using nginx
FROM nginx:alpine

# Copy the built app from the previous stage to the NGINX web server
COPY --from=build /app/dist/kripton /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
