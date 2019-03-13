# ClientForms
PrimeGov Client Forms


## About
This repository was created as a testing ground for the client forms needed for Prime Gov. These forms have basic functionality and the submission of these forms should not take place.

### Use
Clone this repository down to your machine. <br>
Make sure **Node.js** is installed <br>
Run `npm install` to install the packages <br>
Run `node server.js` and naviage to **localhost:3000*** to see the forms in action

### Add New Client
- Create new routes .js file in `/routes/`. You can copy one of the existing clients routes .js file and change applicable variables to the new client. You can remove all routes except index and the new route for your first client form.
- Add the new route into the `server.js` file like the other routes.
- Create a new client folder in the `/views/` directory.
- Inside the new `/views/[client]/` folder create an `index.handlebars` file so you can create the form list for the client
- Update `/views/[client]/index.handlebars` file to display the updated client forms
- Create a new `/views/[client]/[clientform].handlebars` file that will be named the same name as the form.

### Add New Form
- Inside the new `/views/[client]/` folder update the `index.handlebars` file file to display the updated client forms
- Update the `/routes/[client].js` route file to link to the new view
- Create a new `/views/[client]/[clientform].handlebars` file that will be named the same name as the form.
