# ghp-input

Testing form input using github pages.

Secret 1 is processed via a traditional html form. When the form is submitted, the the pages is reloaded with the values as parameters. This not ideal for sensitive values as the http calls are handled by GitHub and may be logged.

Secret 2 is adapted for React, based on [these docs](https://reactjs.org/docs/forms.html).  Specifically, the use of `event.preventDefault();` in the submit handler prevents the http call from happening.

## Run Locally

`npm start`
