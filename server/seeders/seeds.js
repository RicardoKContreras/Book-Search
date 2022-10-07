const mongoose = require('../config/connection');
const User = require('../models/User');


const seedUser = [
    {
     username: 'Ricardo',
    email: 'ricardo@gmail.com',
    password: 'pass123'

    
    },
    {
        username: 'Tiffany',
       email: 'tiffany@gmail.com',
       password: 'pass123'
       },
       {
        username: 'Dante',
       email: 'dante@gmail.com',
       password: 'pass123'
       }
    
];

const seedDB = async () => {
    await User.deleteMany({});
    await User.insertMany(seedUser);
};

seedDB().then(() => {
    mongoose.close();
})