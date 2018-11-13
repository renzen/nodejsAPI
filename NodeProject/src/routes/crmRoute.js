import { addNewContact, getContacts, getContactWithID, updateContact, deleteContact } from '../controllers/crmController';


const routes = (app) => {
    
    app.route('/contact').get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getContacts)
       
    
    // POST endpoints ADD CONTACTS
    .post(addNewContact);


   // GET CONTACT BY ID
    app.route('/contact/:contactId')
    .get(getContactWithID)
    // .put(updateContact)
    // .delete(deleteContact)


   // PUT REQUEST UPDATE
    .put(updateContact)


    // DELETE REQUEST
    .delete(deleteContact);
      
}

export default routes; 








// Remember that you don’t have to call app.route(‘/contact/:contactId’) every single time for GET, PUT or DELETE a single contact. You can combine them

// /lib/routes/crmRoutes.ts
// app.route('/contact/:contactId')
   // edit specific contact
//    .get(this.contactController.getContactWithID)
//    .put(this.contactController.updateContact)
//    .delete(this.contactController.deleteContact)