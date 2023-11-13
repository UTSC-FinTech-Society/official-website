# FTS Offical Website

Designed and developed by our amazing developers in the Tech team :)

## Run Guide

1. Clone the repo locally in your computer

   ```bash
   git clone git@github.com:UTSC-FinTech-Society/official-website.git
   ```

2. Navigate to the official website repo

   ```bash
   cd official-website
   ```

3. Install all the necessary dependencies with npm

   ```bash
   npm install --legacy-peer-deps
   ```

4. Run the website locally and get to see all the amazing contents

   ```bash
   npm start
   ```

## Deployment Guide

1. SSH into the remote DigitalOcean server (Note: ask VP of Tech to add your ssh key to DigitalOcean if you haven't do so yet)

   ```bash
   ssh utscfintech.ca
   ```

2. Navigate to the official website repo and pull the latest main branch with git

   ```bash
   cd official-website
   git pull
   ```

3. Install all the necessary dependencies with npm

   ```bash
   npm install --legacy-peer-deps
   ```

4. Build our production project

   ```bash
   npm run build
   ```

   In case it pops up an error showing heap space is exceeded, run the below command before building project

   ```bash
   export NODE_OPTIONS="--max-old-space-size=8192"
   ```

5. Replace the contents of the folder /var/www/html with the contents of the build folder

   ```bash
   cp -a build/. /var/www/html/
   ```
