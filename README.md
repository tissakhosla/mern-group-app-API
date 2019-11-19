# Project Name: Personal Tracker 

### Deployed Project Link : 
https://personal-tracker-mrt.herokuapp.com/

### Description:
This serves as the backend of a full stack web application called **Personal Tracker**. 

### Technologies: 
***MongoDB, Heroku, Express.js, Node.js***

### Dependicies:
* **body-parser**
* **cors**
* **express**
* **mongoose**

### Roadmap Below:
In order to follow along with the backend of the app as well as the API, below you will find paths as well as brief explanations on http request.

## Paths:

API's can be troublesome to navigate, so here are some paths to call!

**Route**: https://personal-tracker-mrt.herokuapp.com 

**Description**: Following this route will return all data for API.

**Route**: https://personal-tracker-mrt.herokuapp.com/application 

**Description**: Following this route will return data for **applications**.

**Route**: https://personal-tracker-mrt.herokuapp.com/agenda 

**Description**: Following this route will return data for **agendas**.

**Route**: https://personal-tracker-mrt.herokuapp.com/skill

**Description**: Following this route will return data for **skills**.

## Specified Paths:

Here are some specified paths.

**Application ID Route**: https://personal-tracker-mrt.herokuapp.com/application/id/:_id

**Application Company Route**: https://personal-tracker-mrt.herokuapp.com/application/company/:company

**Description**: Following these routes will return data for specific id and/or company in **applications**. (Please note you can also **get**, **put**, **post**, **delete** with these specific paths a well. Meaning you can delete by company/id, you can update by company/id, and you can **get** by company/id.)

**Agenda ID Route**: https://personal-tracker-mrt.herokuapp.com/agenda/id/:_id

**Description**: Following these routes will return data for specific id and/or company in **agenda**. (Please note you can also **get**, **put**, **post**, **delete** with these specific paths a well. Meaning you can delete by ID, you can update by ID,and you can **get** by ID.)

**Skill ID Route**: https://personal-tracker-mrt.herokuapp.com/skill/id/:_id

**Application Company Route**: https://personal-tracker-mrt.herokuapp.com/skill/proficiency/:proficiency

**Description**: Following these routes will return data for specific id and/or company in **skill**. (Please note you can also **get**, **put**, **post**, **delete** with these specific paths a well. Meaning you can delete by Proficiency/ID, you can update by Proficiency/ID,and you can **get** by Proficiency/ID.)


**REST API**
----
  Here are some API calls for full CRUD functionality.

* **Method:**
  
  _The request type_

  `GET` | `POST` | `DELETE` | `PUT`
  
*  **URL Params**

   _If URL params exist, specify them in accordance with name mentioned in URL section._

* **Example Success Response:**
  
  _Example of what the status code would be on success and if there is any returned data. This is useful when people need to to know what their callbacks should expect!_

  * **Code:** 200 <br />
    **Content:** `{ id : 12 }`
 
* **Error Response:**

  _Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. Here is an example._

  * **Code:** 401 UNAUTHORIZED 

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY 
   

## Example

**Show Skill**
----
  Returns json data about a single skill.

* **URL**

  /skill/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Example Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id :  name : "" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "skill doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`
