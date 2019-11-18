const applicationData = require('./application')
const Application = require('../models/Application')

Application.deleteMany({}).then(() => {
  Application.create(applicationData).then(applicationArray => {
    console.log(applicationArray.length);
    console.log(applicationData);
    process.exit();
  });
});