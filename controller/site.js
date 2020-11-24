const WebProduct = require("../Models/Products");
const BlogPost = require("../Models/Blog");
const HomeProduct = require("../Models/Home");
const getMain = async function(req,res) {
    const dulieuHome = await HomeProduct.find({});
    const dulieudogo = await HomeProduct.find({class:"dogo"});
    const dulieunoithat = await HomeProduct.find({class:"noithat"});
    const dulieutieucanh = await HomeProduct.find({class:"tieucanh"});
    await res.render("home", {dulieu: dulieuHome, dulieudogo:dulieudogo, dulieunoithat:dulieunoithat, dulieutieucanh:dulieutieucanh});
 };

const getDogo = async function(req,res) {
    const dulieuDogo = await WebProduct.find({dogo: true});
    res.render("do-go-my-nghe", {dulieu: dulieuDogo});
  };

const getNoithat = async function(req,res) {
    const dulieuNoithat = await WebProduct.find({noithat: true});
    res.render("noi-that", {dulieu: dulieuNoithat});
};

const getSanvuon = async function(req,res) {
    const dulieuSanvuon = await WebProduct.find({sanvuon: true});
    res.render("san-vuon", {dulieu: dulieuSanvuon});
};

const getBlog = async function(req,res) {
    const dulieuBlog = await BlogPost.find({});
    res.render("blog", {dulieu: dulieuBlog});
}

const getArticle = async (req,res) => {
    try {
      const result = await BlogPost.findOne({param: req.params.id});
      const allBlogs = await BlogPost.find({});
      return res.render("readmore", {dulieu: result, dulieuall: allBlogs});
    }
    catch(error) {
        console.log(error);
    };
  };

module.exports = {
    getMain,
    getDogo,
    getNoithat,
    getSanvuon,
    getBlog,
    getArticle,
};