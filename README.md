# Jos De Berdt Portfolio / CV

The project uses NextJS to render a static website and is just my portfolio / CV website.  
Each day a cronjob runs on the server to pull in the latest changes on the master branch.  

The website has been created using the KISS principle (Keep It Simple Stupid) and simple it is (and possibly stupid as well, but you be the judge of that).   
Using practically only white, grey and black ... The website was build quite fast.   

If you would have a look at the css, then you'll notice I have dev-assets folder and assets folder. In the dev-assets you'll find the unminified global css files and page/component specific css files.  
Gulp is used to minify and concat most files in the assets folder.  
The naming of classes in the page/component specific css files are : <component><TypeComponent><SubComponent>.  
In a way, the methodology is similar to BEM, but does not follow the BEM specifications to the letter.  
There is also a print css included.  

See the website live at https://www.josdeberdt.be  
Want to change something? Feel free to make a pull request.

## How to copy/alter this website?
- Git clone it
- Open a terminal in the directory
- command:    
  (For development)  
  npm run dev  
  gulp watch  
  (For production)  
  npm run build   
  npm run start  
  
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
