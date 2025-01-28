const mongoose = require("mongoose");
const path = require("node:path");
// const db = require("./src/db")
const BlogModel = require("../../db/models/Blog");
var kebabCase = require('lodash.kebabcase');
const express = require("express");
const app = express();
const slugify = require("slugify")



exports.getPosts = async (req, res, next) => {
    BlogModel.find().sort().exec()
        .then(result => res.json(result))
        // console.dir(result)
        .catch(err => res.json(err));
res.status(200)
};



exports.postFilter = async (req, res, next) => {

  await  BlogModel.findById(req.params._id).exec()
  .then(result => res.json(result))
    .catch(err => res.status(404).json({ nopostfound: 'No Posts found' }));

};


exports.newPost = async (req, res, next) => {
    const post = req.body;
    
    const newPost = new BlogModel(post);
    await newPost.save();

    // res.json(post); tu wywalalo blad set header 
      res.json({ message: "Post added successfully!✅" });
    res.status(201)

};


exports.putPost = async (req, res, next) => {
    const post = req.body;
    BlogModel.findByIdAndUpdate({_id:req.params._id}, post, {new: true}).exec()
        // .then(result => res.json(result))
        .catch(err => res.json(err));
        // console.dir(post)
};

exports.deletePost = async (req, res, next) => {
    BlogModel.findByIdAndDelete({ _id: req.params._id }).exec()
        .then(response => res.json(response))
        .catch(err => res.json(err));
        res.status(204)
};   