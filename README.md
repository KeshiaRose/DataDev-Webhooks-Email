# Webhooks Email Sample

A sample app that sends out emails based on data source refresh successes on Tableau Server using webhooks.

## What you'll need

* A Tableau Server or Online site. Want a free developer sandbox site? Join our [Developer Program](https://developer.tableau.com)!
* A [Personal Access Token](https://help.tableau.com/current/server/en-us/security_personal_access_tokens.htm) for the above Server/Site.
* A free [SendGrid](https://sendgrid.com/) account or similar for sending the emails.

## How to set it up - Glitch

1. [Remix](https://glitch.com/edit/#!/remix/datadev-webhooks-email) this project and take note of the URL.
1. Update the evironment variables to match your Tableau Server/Online and SendGrid credentials
1. [Create a new webhook](https://github.com/tableau/webhooks-docs) using the REST API with `https://your-project.glitch.me/DatasourceRefreshSucceeded` as the endpoint.
1. Trigger the webhook and receive an email!

## How to set it up - Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/KeshiaRose/datadev-webhooks-email)
1. Hit the "Deploy to Heroku" button and edit the evironment variables to match your Tableau Server/Online and SendGrid credentials
1. [Create a new webhook](https://github.com/tableau/webhooks-docs) using the REST API with `https://your-app.herokuapp.com/DatasourceRefreshSucceeded` as the endpoint.
1. Trigger the webhook and receive an email!
