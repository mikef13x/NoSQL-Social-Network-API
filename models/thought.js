//require mongoose for schema and model
const { Schema, model} = require('mongoose');
//create thoughtSchema
const thoughtSchema = new Schema(
    {
        //thoughtText portion of model
        thoughtText: {
            type: String,
            required: true,
            max_length: 280,
        },
        //createdAt portion of model
        createdAt: {
            type: Date,
            required: true,
            default: Date.now(),

        },
        //username portion of model
        username: {
            type: String,
            required: true,
        },
        //reactions portion of model
        reactions: [
            reactionSchema
        ],
    },
    {
        //allow getters
        toJSON: {
            getters: true
        }
    }
);
// create virtual property to return reactions length
thoughtSchema.virtual('reactionCount').get(function() {
    return `${this.reactions.length}`
});
// initialize model
const Thought = model('thought', thoughtSchema);
// export model 
module.exports = Thought;