const mongoose = require('mongoose')



const db_schema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        job:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true,
            default: 23,
        },
        salary:{
            type: Number,
            required: true,
            default: 5000
        }

    },
    {
        timestamps: true, 
    }

);

module.exports = mongoose.model("users", db_schema)
