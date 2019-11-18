const skillData = require('./skills')
const Skill = require('../models/Skill')

Skill.deleteMany({}).then(() => {
  Skill.create(skillData).then(skillArray => {
    console.log(skillArray.length);
    console.log(skillData);
    process.exit();
  });
});