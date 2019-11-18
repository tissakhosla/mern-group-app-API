
const skillData = require('./agenda')
const Skill = require('../models/Agenda')

Skill.deleteMany({}).then(() => {
  Skill.create(skillData).then(skillArray => {
    console.log(skillArray.length);
    console.log(skillData);
    process.exit();
  });
});