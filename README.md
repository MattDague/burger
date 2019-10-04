Introduction 
---------------------------------------------

https://shielded-brushlands-29704.herokuapp.com/

Hello and welcome to Eat Da Burger! Eat da burger at face value is a very simple app that allows you to add burgers to a list of burgers waiting to be eaten. Once a burger is in that list it then is given a button which allows the burger to be "eaten" and is sent to the other list to join its fellow devoured burgers. It really is that simple but how the app runs behind the scene is what makes it stand out!


Development
---------------------------------------------
The best way to describe how this app runs is to do a brief breakdown of what the main files are actually doing.

Server.js - This file is what initiates all of the others. It directs the app on how to use Express to perform all of its functions as well as routes other files such as the controller file and the css/js contained in the public folder.

Connection.js - This file initiates the connections to the database. The call is actually made to two different databases depending on the success of connection. It first attempts to connect to the JawsDB but if that fails it automatically redirects to a local server on mysql. If connection is successful the rest of the app can function.

orm.js - This is the primary file for communicating to the database. This file is divided into two main parts. The first part contains two different functions that assist in formatting the variables being fed into the connection query so that they can be read by MySQL. The second part of the orm contains the functions that actually do the communication. These are more generic than a normal query because they are designed to pull in variable values from other files. When the values are provided then the functions here serve to pull the information from the database, add new burgers and update the status of the burgers to "devoured". The orm is what sends that information to the database.

burgers_controller.js - The controller file exists for the Express routing between the other files. It helps direct the handlebars files and passes on information to the orm.

burger.js - This file exists to make the orm more specific essentially. For each of the functions burger.js passes the values for a "burger" into the querys the orm makes.

burgerJava.js - This file serves two primary purposes that fall under the realm of user input. Its first function is to give functionality to the buttons to eat the burger. Eating is causes the status to change and then it makes the ajax call. The second function is to create a new burger and retrieve the data from the input text box and pass it on.

The handlebars - The main handlebar file simply definese the html that constitutes the main page. The index handlebar file is much more robust because it fills out the page. It mostly fills out the html values of the site but it also is responsible for dividing the uneaten and eaten burgers. Using the handlebars it reads the status of a burger, puts it into the appropriate colums and gives it a button if necessary.



How To Use
-------------------------------------------

Its a very simple app to use but here is the walkthrough:

To eat a burger on the left simply click the eat button next to the burger, it will then be moved to the right column. If you want to add a burger to the left column you may type it into the buttom text input and add it! Thats it!


Technologies Used
----------------------------------------
- Express
- SQL
- Heroku
- Handlebars
- Node.js
- Javascript
- NPM 
- SQL
- Path
- dotenv




