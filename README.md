# static_node_and_express_portfolio_site
Learn more about the developer on <a href="https://www.linkedin.com/in/tamarabuilds/" target="_blank">LinkedIn</a>

Unit 06 project for the Full Stack JavaScript Techdegree. This project utilizes Node.js and Express to create a modern portfolio showcasing the projects I've built. There is a landing page, an 'about' page, and a series of project pages.

![Screenshot 2023-10-13 at 8 59 17 PM](https://github.com/tamarabuilds/static_node_and_express_portfolio_site/assets/98510821/72960087-bc40-4174-93de-d95d70103509)

Live site: https://tamarabuilds.github.io/static_node_and_express_portfolio_site/

## How It's Made

Tech used: HTML, CSS (proided by Treehouse), JavaScript, Express, Node.js and Pug

I used npm to manage packages necessary for the project. This includes express and pug so you'll need to run 'npm install' in the project folder if you want to run the files locally.


## Optimizations

I spent a lot of time working on managing errors. There's even a server test error page if you navigate to '/error'


## Lessons Learned

Picked up a bunch of skills including:
 * Building an express server
 * Working with npm and customizing the package.json file
 * Setting routes and middleware
 * Creating Pug templates 
 * Efficiently setting up gitpages for my projects
 * Importance of standardizing my READMEs


## Extra Features

* Cusomized package.json file so that running 'npm start' will run the app.
* Renders helpful PUG templates in the error-handling middleware.
  * When the status property is a 404, a 'page-not-found.pug' template is rendered.
  * For any other status code, the 'error.pug' template is rendered.
* Structure, style and CSS were updated:
  * Updated font to Lexend to improve readability. Learn more: https://www.lexend.com/
  * A custom logo favicon was added as a little star.
  * Background color for the sidebar was updated.
  * All image and button borders are rounded off.


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License

[MIT](https://choosealicense.com/licenses/mit/)
