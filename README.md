# live-website
Git repo of my online website, hosted at josdeberdt.be

The project uses NextJS to render a static website.  
Each day a cronjob runs on the server to pull in the latest changes on the master branch.

See the website live at https://www.josdeberdt.be  
Want to change something? Feel free to make a pull request...

## How to copy this website?
- Git clone it
- Open a terminal in the directory
- command: npm run dev  
  (For devevelopment)  
  npm run build   
  npm run start  
  (For production)  
  
## How is this the server configured?
I use only a few technologies on the server side.  
- A firewall (with limited ports open for Nginx & SSH)
- SSH key protected
- Nginx
- NPM & NodeJS
- PM2 (for process management)  
- cron job (runs at night to pull in changes, rebuild the static site, reload the npm process)
