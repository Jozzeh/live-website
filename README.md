# Jos De Berdt Portfolio / CV

The project uses NextJS to render a static website and is just my portfolio / CV website.  
Each day a cronjob runs on the server to pull in the latest changes on the master branch.  

The website has been created using the KISS principle (Keep It Simple Stupid) and simple it is.   
Using practically only white, grey and black ... The website was build quite fast.   

If you would have a look at the css, then you'll notice I have a global css file and some page/component specific css files.  
The naming of classes in the page/component specific css files are : <component><TypeComponent><Action>.  
In a way, the methodology does is similar to BEM, but does not follow the BEM specifications to the letter.  
On the 'Who' page, I've included a print css file.  

See the website live at https://www.josdeberdt.be  
Want to change something? Feel free to make a pull request.

## How to copy this website?
- Git clone it
- Open a terminal in the directory
- command: npm run dev  
  (For devevelopment)  
  npm run build   
  npm run start  
  (For production)  
  
## How is the server configured?
I use only a few technologies on the server side.  
- A firewall (with limited ports open for Nginx & SSH)
- SSH key protected
- Nginx
- HTTPS certificates through letsencrypt
- NPM & NodeJS
- PM2 (for process management)  
- cron job (runs at night to pull in changes, rebuild the static site, reload the npm process)
- DNS setup (not on server, but did that as well)
