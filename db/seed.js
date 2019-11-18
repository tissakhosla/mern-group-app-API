let trackerData = require('./')
const Tracker = require('../models/Model')

Tracker.deleteMany({}).then(() => {
  Tracker.create(trackerData).then(trackerArray => {
    console.log(trackerArray.length);
    process.exit();
  });
});