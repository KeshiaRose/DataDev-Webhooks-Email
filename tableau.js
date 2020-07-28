const fetch = require("node-fetch");

let urlBase = process.env.SERVER + "/api/" + process.env.VERSION;
let headers = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

// Authenticate and receive a token
module.exports.signIn = callback => {
  const url = process.env.SERVER + "/api/" + process.env.VERSION + "/auth/signin";

  const body = `{
    "credentials": {
       "site": {
          "contentUrl": "${process.env.SITE_NAME}"
       },
       "personalAccessTokenName": "${process.env.PAT_NAME}",
       "personalAccessTokenSecret": "${process.env.PAT_SECRET}"
    }
  }`;

  const options = {
    method: "POST",
    headers,
    body
  };

  fetch(url, options)
    .then(response => response.json())
    .then(body => {
      headers["X-Tableau-Auth"] = body.credentials.token;
      urlBase =
        process.env.SERVER +
        "/api/" +
        process.env.VERSION +
        "/sites/" +
        body.credentials.site.id;
      callback(body.error);
    });
};

// Get workbook by ID
module.exports.getWorkbook = (workbookID, callback) => {
  const url = urlBase + "/workbooks/" + workbookID;

  const options = {
    method: "GET",
    headers
  };

  fetch(url, options)
    .then(response => response.json())
    .then(body => {
      callback(body.error, body.workbook);
    });
};

// Get data source by ID
module.exports.getDataSource = (dataSourceID, callback) => {
  const url = urlBase + "/datasources/" + dataSourceID;

  const options = {
    method: "GET",
    headers
  };

  fetch(url, options)
    .then(response => response.json())
    .then(body => {
      callback(body.error, body.datasource);
    });
};

// Make sure to be authenticated when getting data
module.exports.getTableauData = (method, input, callback) => {
  method(input, (methodErr, data) => {
    if (methodErr) {
      exports.signIn(authErr => {
        if (authErr) {
          callback(authErr, null);
        } else {
          method(input, callback);
        }
      });
    } else {
      callback(null, data);
    }
  });
};
