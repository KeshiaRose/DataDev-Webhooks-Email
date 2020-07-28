# Webhooks Email Sample

A sample app that sends out emails based on Tableau Server Webhooks.

## What you'll need

If you would like to try out this sample app with your own server you can [remix](https://glitch.com/edit/#!/remix/datadev-webhooks-email) and/or download this project and add your own information to the .env file. You will need the following:
* A Tableau Server or Online site. Want a free developer sandbox site? Join our [Developer Program](https://developer.tableau.com)!
* A [Personal Access Token](https://help.tableau.com/current/server/en-us/security_personal_access_tokens.htm) for the above Server/Site.
* A free [SendGrid](https://sendgrid.com/) account or similar for sending the emails.

## How to set it up

1. [Remix](https://glitch.com/edit/#!/remix/datadev-webhooks-email) this project and take note of the URL.
1. Update the evironment variables to match your Tableau Server/Online and SendGrid credentials
1. [Create a new webhook](https://github.com/tableau/webhooks-docs) using the REST API with your project's URL as the endpoint.
1. Trigger the webhook and receive an email!
