const trackerData = require('./trackers')
const Tracker = require('../models/Tracker')

Tracker.deleteMany({}).then(() => {
  Tracker.create(trackerData).then(trackerArray => {
    console.log(trackerArray.length);
    console.log(trackerData);
    process.exit();
  });
});