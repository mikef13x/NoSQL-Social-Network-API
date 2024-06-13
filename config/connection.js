const { connect, connection} = require('mongoose');
//create connection string
const connectionString = 'mongodb://127.0.0.1:27017/SocialNetworkApiDB'
//connect to the string
connect(connectionString);
//export the connection
module.exports = connection