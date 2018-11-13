import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UsersSchema = new Schema({

userName: {type: String,required: 'Enter a user name'},
passWord: {type: String,required: 'Enter a pass name'},
email: {type: String,required: 'Enter an email address'},
created_data: {type: Date,default: Date.now},
IsActive: {type: Number, default: '0'},
usersInfo:{
firstName: {type: String,required: 'Enter a first name'},
lastName: {type: String,required: 'Enter a last name'},
email: {type: String,required: 'Enter an email address'},
gender: {type: Number,required: 'Please select gender'},
company: {type: String,required: 'Enter a company'},
phone: {type: Number,required: 'Enter a phone number'},
created_data: { type: Date, default: Date.now},
updatedAt: { type :String, default: null },
updatedBy: { type: String },
},
addresses: [{
    houseNo: String,
    street: String,
    barangay: String,
    city: String,
    zipCode: String,
    Country: String
}] 

});