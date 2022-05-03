const PersonService = require('../service/person');

class PersonController{
 async   createPerson(req,res){
        try {
          await PersonService.createPerson(req.body);
          res.status(201).json();

        } catch (err) {
            console.log(err);
        }
    }
    async updatePerson(req,res){
      try {
        await PersonService.updatePerson(req.body);
        res.status(201).json();
      } catch (err) {
        console.log(err)
      }
    }
    async deletePerson(req,res){
      try {
        await PersonService.deletePerson();
      } catch (err) {
        console.log(err)
      }
    }
}
module.exports = new PersonController();
