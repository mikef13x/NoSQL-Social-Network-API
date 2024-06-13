// require mongoose
const { Schema, Types } = require('mongoose');
//create reaction schema
const reactionSchema = new Schema(
    {
        //reactionId portion of schema
        reactionId: {
            type:Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        //reactionBody portion of schema
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        //username portion of schema
        username: {
            type: String,
            required: true,
        },
        // created at portions of schema
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        // allow getters
        toJSON: {
            getters: true
        }
    }

);
//exporting the schema
module.exports = reactionSchema;
