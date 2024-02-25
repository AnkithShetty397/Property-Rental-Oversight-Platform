//calling the packages
const mysql         =require('mysql')
const express       =require('express')
const mongoose      =require('mongoose')
const morgan        =require('morgan')
const bodyParser    =require('body-parser')

//importing routes
const reviewRoute   =require('./database/nosql/routes/reviewRoute')

//connecting nodejs to mysql
const mysqldb=mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "password",
    database: "ams_database"
});

mysqldb.connect(function(err){
    if(err) throw err;
    console.log("MySQL database connection established!")
});

//connecting nodejs application to mongodb database using mongoose
mongoose.connect('mongodb://localhost:27017/nosqldb',{})       //default port //nosqldb is the name of mongodb
const db = mongoose.connection

//logging 
db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log('MongoDB connection established!')
})

const app = express()                               //Initializing the express application

app.use(morgan('dev'))                              //Morgan middleware is used for logging HTTP requests
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000               // server port number

app.listen(PORT,()=>{                               //start listening to the server port
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/review',reviewRoute)                  //mounting middleware function