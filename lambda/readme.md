# Intro to Alexa Conversations 

This folder contains the nodejs lambda function code for the Intro to Alexa Conversations hosted template available in the Alexa Developer Portal.

# How to use
You should only use this code if you create a new Alexa skill using the Intro to Alexa Conversations template, but decide to host your own endpoint for the skill service.

# Installing the code in your own lambda function
To use this code in your own AWS Lambda function, you will need to login to your AWS account and create a lambda function for NodeJS using the latest version and paste the 3 files into the inline editor or upload a zip file containing the files. For more information on setting up lambda functions for use in Alexa skills, please see our documentation: [Host a Custom Skill as an AWS Lambda Function](https://developer.amazon.com/en-US/docs/alexa/custom-skills/host-a-custom-skill-as-an-aws-lambda-function.html%28https://developer.amazon.com/en-US/docs/alexa/custom-skills/host-a-custom-skill-as-an-aws-lambda-function.html)


# Skill Functionality

Please refer to the [developer documentation](https://developer.amazon.com/en-US/docs/alexa/conversations/about-alexa-conversations.html) for details or terminology you don't understand as part of this guide.

This template provides a very simple starting point to demonstrate a few key concepts in Alexa Conversations. Out of the box it supports the following voice flows:

 - A modal launch showing an APL welcome screen and APL-A welcome prompt ("open *conversation starter*")
 - A one-shot invocation that stores a favorite color in the skill session, repeating the stored color back to the user and showing the color in an APL (visual) template
 - An invocation asking for the favorite color within the same session, again showing the color on the screen and repeating the color back to the user

As a developer, you can see examples of:

 - Annotated dialogs to consume user input
 - Calling a configured API to pass the captured input to the lambda function,
 - Storing the input in the skill session and returning a valid API response
 - Processing the response in APL-A (audio) and APL (visual)

Before modifying the template to begin your development, you should try to following invocations and trace their path through the annotated dialog to understand how Utterance Sets, API invocations, API responses and Response Templates are connected together in the dialog to create the interaction and round trip. 

 1. "Alexa, open *conversation starter*"
 2. "Alexa tell *conversation starter* my favorite color is blue"
 3. (within an existing session, after being prompted by Alexa "What would you like to do?") "what is my favorite color"

# Modifying the template
You can feel free to leave the existing dialogs, APIs, response templates and utterance sets in place and start building your own dialogs, just be aware that utterances that match those in the existing utterance sets have a chance of invoking those dialogs.
## To completely clear any traces of the template and start with a 'bare metal' Alexa Conversations skill

 - Delete the Utterance Sets named **GetFavoriteColor** and **SetFavoriteColor**
 - Delete the dialogs **RecordFavoriteColor** and **GetFavoriteColor**
 - Delete the API Definitions **RecordColor** and **GetFavoriteColor**
 - Delete the Response Templates **RecordColorSuccess**, **GetFavoriteColorSuccess** and **RequestFavoriteColor**
 - You will also want to modify the **welcome** template so that the modal skill launch (i.e. "open *conversation starter*) is more appropriate for your skill (if needed) and change the visual response template contents to something different instead of a page showing color selections.
