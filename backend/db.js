const Pool=require('pg').Pool;
require('dotenv').config();

const pool=new Pool({
    host:"localhost",
    user:"postgres",
    password:"Darsini@22",
    port:5432,
    database:"regvendor",
    
})

module.exports= pool;