const {Schema, model} = require("mongoose");

const homeSchema = new Schema({
    name: String,
    link: String,
    alt: String,
    class: String,
});

const HomeProduct = model("HomeProduct", homeSchema);

module.exports = HomeProduct;