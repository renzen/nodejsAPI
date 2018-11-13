import mongoose from 'mongoose';
import {UsersSchema} from '../models/crmModel';
import jwt from 'jsonwebtoken';
var bcrypt = require('bcryptjs');
const Contact = mongoose.model('Contact', UsersSchema);


// ADDING TO DATABASE
export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync(req.body.passWord, salt);

    newContact.passWord= hash;
    newContact.save((err, contact) => {
        if (err){
            res.send(err);
        }
       // res.json(contact);
        res.json({message: 'Contact added successfully', contact});
    });
};

// GET ALL CONTACTS
export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Contact get successfully', contact});
    });

};


// GET  CONTACTS BY ID
export const getContactWithID = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Contact get by Id successfully', contact});
    });

};

// PUT UPDATE CONTACTS BY 
export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id:req.params.contactId}, req.body, {new: true}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Contact updated successfully', contact});
    });

};



// DELETE CONTACTS 
export const deleteContact = (req, res) => {
    Contact.remove({_id:req.params.contactId}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Contact deleted successfully'});
    });

};





