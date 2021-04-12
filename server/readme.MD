# Overview

Routes are setup in the routes folder, just create the new endpoint (file) for the node facade. Add the routes you would like under that endpoint, and then inside of index.js just add the new endpoint to the endpoints array.

you will need to have `nodemon` installed globally or locally

Everything in the routes is namespaced to `/api` then the endpoints add onto that namespace

you will need both this running in a terminal, as well as the client running in a terminal, since they are in two separate folder structures 