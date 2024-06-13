//require mongoose for schema and model
const { Schema, model } = require('mongoose');
//creating user schema
const userSchema = new Schema(
    {
        // make username portion of model
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        //email portion of model
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, 'Enter a Valid Email']
        },
        //thoughts portion of model
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            },
        ],
        //friends portion of model
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ],
    },
    {
        //allowing virtuals
        toJSON: {
            virtiuals: true,
        },
        id: false,
    }
);
// creating virtual for gathering friends length
userSchema.virtual('friendCount').get(function(){
        return `${this.friends.length}`
    });
// initialize user model
    const User = model('user', userSchema);
// export user model
    module.exports = User;