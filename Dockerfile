# FROM node:16-alpine

# WORKDIR /app

# COPY package.json ./

# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD [ "npm","start"]
# -------------------------------------------------
# FROM node:16-alpine AS build

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build

# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
# -----------------------------------------------------
    # Step 1: Use Node.js as the base image
FROM node:16-alpine AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json or yarn.lock to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Build the React app with Vite
RUN npm run build

# Step 7: Use an nginx image to serve the built app
FROM nginx:alpine

# Step 8: Copy the built files from the previous step to the nginx container
COPY --from=build /app/dist /usr/share/nginx/html

# Step 9: Expose port 80 to serve the app
EXPOSE 80

# Step 10: Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
