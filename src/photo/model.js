import mongoose from 'mongoose';

const photoSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    comment:String,
    author:String,
    tags: [{
        type: String
    }],
    date: Date,
    countOfLikes: Number
});

const Photo = mongoose.model("Photo", photoSchema);

export default Photo;