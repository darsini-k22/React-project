const Pool=require('pg').Pool;
require('dotenv').config();

const pool=new Pool({
    host:process.env.DATABASE_HOST_NAME,
    user:process.env.USER_NAME,
    password:process.env.PASSWORD,
    port:process.env.POST_NUMBER,
    database:process.env.DATABASE_NAME,
    
})

module.exports= pool;