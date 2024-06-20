const mongoose = require("mongoose")
const TrackerSchema = new mongoose.Schema({
    amount:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    value:{
        type:String,
        require:true
    },
    id:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    }
});
const TModel = mongoose.model("Tmo" , TrackerSchema);
module.exports = TModel;
