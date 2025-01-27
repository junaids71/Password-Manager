const express = require('express')
const app = express()
const dotenv =require('dotenv')
dotenv.config()
const { MongoClient } = require('mongodb');
const bodyparser= require('body-parser')
const cors=require('cors')
app.use(bodyparser.json())

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

const port = 3000
 client.connect();
app.use(cors())
//get all the passwords
app.get('/',async (req, res) => {
  const db= client.db(dbName);
  const collection= db.collection('passwords');
  const findResult= await collection.find({}).toArray();
  res.json(findResult)
})

//save the passwords
app.post('/',async (req, res) => {
  const password= req.body
  const db= client.db(dbName);
  const collection= db.collection('passwords');
  const findResult= await collection.insertOne(password)
  res.send({success: true, result: findResult})
})
//delete the passwords by id
app.delete('/',async (req, res) => {
  const password= req.body
  const db= client.db(dbName);
  const collection= db.collection('passwords');
  const findResult= await collection.deleteOneOne(password)
  res.send({success: true, result: findResult})
})
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

