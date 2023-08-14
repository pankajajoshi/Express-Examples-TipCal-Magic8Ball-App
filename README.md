<h1>Express Examples</h1>

Practice the Basics of Express

Learning Objectives
Set up some express servers for practice
make some get routes
use url/query parameters
Prerequisites
Nodejs
npm packages
Introduction to expressjs
Request/response/ how the internet works basics
Basic understanding of routing
JavaScript, HTML fundamentals
Technical Requirements
Must be able run without syntax errors (ok if it breaks after the user tries to do something, though do try to comment on the code that isn't working)
Must get functionality required for each section working
Learning Objectives
Practice setting up express applications.
Practice creating custom routes.
Practice using parameters from a request.
Getting Started
In the homeworkdirectory for today, create a Javascript file server.js. Write your answers inside this one js file.

npm init -y. 

</ br>

You should receive a package.json.
Install express. npm i express. Check your files.

:elephant: Hint: You can check to make sure your installation was successful in one of the following places:

Your package.jsonfile should have expresslisted in the dependencies.
You could also check in your node_modulesfolder to see anexpressfolder.
Require expressand set the app. (look back to the markdown from today if you need more help on how to do this).
Tell the server where to listen for requests (the port).
Greetings
Make a route '/greeting'that sends a generic greeting to the screen like "Hello, stranger".
Give the greetingroute a param /:name
When hitting the route, the page should display a message such as "Hello, ", or "What's up, <name>", or "<name>! It's so great to see you!" (ex. hitting '/greeting/Jimmy-boy'should display Wow! Hello there, Jimmy-boyon the page).

<h2>Tip Calculator</h2>

Your app should have a route of '/tip'and it should expect 2 params. One should be totaland one should be tipPercentage.
When hitting the route, the page should display how much your tip will be based on the total amount of the bill and the tip percentage. (ex. hitting '/tip/100/20'should display 20on the page).

<h2>Magic 8 Ball</h2>

Create a route of '/magic'that should expect a phrase in the URL that ask the Magic 8 ball a question.
So if the user hits that route and asks a question of "Will I be a Millionaire" (ex. '/magic/Will%20I%20Be%20A%20Millionaire') he should have return to him his question AND a random Magic 8 ball response (see the array below) on the screen.
We can't use spaces in the url, so we use %20to express a space in the url.
So if the user hits that route and asks a question of "Will I be a Millionaire" he should get his question asked and a random Magic 8 ball quote on the screen.
Send the magic 8 ball response back between html tags
Use this array of Magic 8 ball responses.....
["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
