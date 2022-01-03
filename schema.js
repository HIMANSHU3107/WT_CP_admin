// Import mongoose and Schema
const mongoose = require("mongoose");


// Create a custom blog schema
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
    },
    content: {
        type: String,
        required: true,
        minlength: 1,
    },
    imageurl: {
        type: String,
        required: true,
    }
});

// Export the created schema as a model
module.exports = mongoose.model("Blogs", blogSchema);