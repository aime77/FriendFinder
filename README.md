# Friend Finder - Node and Express Servers <h1>
## Overview<h2>
 Dating app which takes results from users' surveys and compares answers with those from other users. The app displays the name and picture of the user with the best overall match.

## Dependencies - Front-End<h2>
* Bootstrap
* JQuery Modals

## Dependencies - Back-End<h2>
* Express
* Node
* Heroku
* JawsDB MySQL

## Structure - Front-end<h2>
* Built dynamically 
* Ajax post request to send survey data and receive a response with best match information

## Structure - Back-end<h2>
* Two html routes:
1. _index.html_ main site to direct user to take survey
2. _survey.html_ survey site

* One api route:
1. _api/friends_ 
**get** method to obtain all data from database and send a JSON object
**post** method to insert new friend into database AND to calculate best match and send response to client

## Link to app<h2>
* Click on the following link to access the app: https://find-friends-4-ever.herokuapp.com/
* Clickk the following link for JawsDB app database information: https://dashboard.jawsdb.com/mysql/dashboard

