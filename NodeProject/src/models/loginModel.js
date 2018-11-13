import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const Loginchema = new Schema({
 userName: {
     type: String,
     required: 'Enter a user name'
 },
 passWord: {
    type: String,
    required: 'Enter a pass name'
},
email: {
    type: String,
    required: 'Enter an email address'
},

created_data: {
    type: Date,
    default: Date.now
}

});