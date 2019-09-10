var express = require('express');
var http = require('http');
var path = require('path');
var faker=require('faker');
var cors = require('cors');
var bodyParser=require('body-parser');
var app =express();
var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var connection = mongoose.connect('mongodb://localhost/appdb',{useNewUrlParser:true}).then(()=>{
	console.log('connected mongo')
}).catch(err => {
	console.log(err)
});

app.use(cors());

var tankSchema =  new Schema({
  _id :String,
  name: String,
  email: String,
  company: String,
});

var tank = mongoose.model('tank',tankSchema);
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/users',function(req,res)
{
	tank.find().then((data) => {
		res.json(data);

	})
});
app.use('/user/:id',function(req,res)
{
	tank.findOne({_id:req.params.id}).then((data) => {
		res.json(data);
	})
});
app.use('/saveuser',function(req,res)
{
	let data = req.body;
	tank.updateOne({_id:req.params.id},data,{upsert:true}).then((data) => {
	res.json({msg:"succes"});
		//res.send('save users');
	})

});
app.use('/deleteuser/:id',function(req,res)
{
	console.log(req)
	tank.deleteOne({_id:req.params.id}).then((data) => {
			res.json({msg:"deleted"});
	//	res.send('delete users');

	})
});

app.listen(3000);
console.log('localhost:3000');
