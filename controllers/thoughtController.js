const { User, Thought } = require('../models');

module.exports = {
    // get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // to get one single thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought with the ID' })
            }
            res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //creation of a thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thought._id } },
                { new: true }
            )
            if (!user) {
                return res.status(404).json({ message: 'thought creation successful, but no user found with the ID given' })
            }
            res.json("created Thought")
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //updating a thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thoughts with that id' });
            }
            res.json(thought);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    //deleting a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
            if (!thought) {
                return res.status(404).json({ message: 'No thoughts with that id' });
            }
            res.json({ message: 'Thought successfully deleted' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //posting a reaction
    async postReaction(req, res) {
        try {
            const reaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true }
            );
            if (!reaction) {
                return res.status(404).json({ message: 'No thoughts with that id' });
            }
            res.json(reaction);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // deleting a reaction
    async deleteReaction(req, res) {
        try {
            const reaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            );
            if (!reaction) {
                return res.status(404).json({ message: 'No reaction with this id' });
            }
            res.json(reaction);
        } catch (err) {
            res.status(500).json(err);
        }
    }



}