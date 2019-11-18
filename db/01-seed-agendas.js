
const agendaData = require('./agenda')
const Agenda = require('../models/Agenda')

Agenda.deleteMany({}).then(() => {
  Agenda.create(agendaData).then(agendaArray => {
    console.log(agendaArray.length);
    console.log(agendaData);
    process.exit();
  });
});