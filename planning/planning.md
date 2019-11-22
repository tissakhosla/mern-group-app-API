# Planning Notes for Personal Tracker MERN-Stack App

## Day 1 Planning:
  
 - [x] Submit Issue with app description and models
 Original Model from issue:

```
const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const skillSchema = new Schema({
  skill: String,
  proficiency: Number,
  examples: [String]
})

const contactSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: Number,
  email: String
})

const statusSchema = new Schema({
  submitted: Boolean,
  dateAndTime: Date
})

const applicationSchema = new Schema({
  company: String,
  position: Number,
  link: String,
  rate: Number,
  contacts: [contactSchema],
  status: [statusSchema]
})

const agendaSchema = new Schema({
  eventType: String,
  dateAndTime: Date,
  description: String
})

const TrackerSchema = new Schema({
  userName: String,
  headShot: String,
  skills: [skillSchema],
  applications: [applicationSchema],
  agenda: [agendaSchema]
})

module.exports = mongoose.model("Tracker", trackerSchema)
```
 - [x] Initialize NPM and install backend dependencies:
  - Mongoose
  - Express
  - Body-Parser
  - Cors
 - [x] Build Repo File Structure
  - models folder: skill, contact, agenda, etc.
  - routes: same as above
  - controllers: same as above
  - db: connection.js, seed.js files, JSON items
 - [x] Build out necessary files listed above.
 - [x] Does localHost work?
 - [x] Deploy to MongoDB Atlas (Follow 19 Steps)
 - [x] Deploy to Heroku


## Day 2 Planning:

Routes: 
 - Agenda, Skills, Applications, RouteIndex
ForEach: findbyName, Update and Delete, reach CRUD. 

## MVP, Bronze, Silver, Etc.

### Bronze:

1 Model, 1 collection
```
{
  company: String,
  contact: String
  //etc
}
```

### Silver:
```
Applications = { 
  Rate: String,
  Company: String,
  Position: String 
  Contact: String
}

Agenda = {
  EventType: String
  Description: String
}

Skills = {
  Skill: String,
  Proficiency: Number,
  Example: String
}

```


### Gold: Arrays of Objects
```
Applications = [{ 
  Rate: Number,
  Company: Links,
  Position: Links,
  Contact: Array of Links
}]

Agenda = [{
  EventType: String,
  Description: String
  Date: Date,
  Time: Date,
  Status: Boolean
}]

Skills = [{
  Skill: String,
  Proficiency: Number,
  Example: Array of Links
}]

```

### Platinum: 
1. Multi-User with Authentication
1. Maps
1. More Tests that test for deeper items. 
1. Calendar functionality

## Day 3 Planning

- [x] Wire frame the front-end 
- [x] Build the Dashboard so all items appear. 
- [ ] Redirect -- Hogwarts

## Day 4 Planning

- [x] Storybook Components
 - checkboxes
 - blue button
 - inputTypeSubmits

- [ ] Carefully replace components - checkout page 5 of note images. 

- [x] JEST!!
- [ ] User Authorization
- [ ] Deployment Submission


