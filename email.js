const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports.sendDataSource = dataSource => {
  const msg = {
    to: process.env.MY_EMAIL,
    from: "krose@tableau.com",
    subject: `Data source ${dataSource.name} has been refreshed!`,
    text: `The data source ${dataSource.name} was successfully refreshed at ${dataSource.updatedAt}.`,
    html: `The data source <b>${dataSource.name}</b> was successfully refreshed at ${dataSource.updatedAt}.`
  };
  sgMail.send(msg);
  console.log("Email sent!")
};
