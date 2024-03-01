const axios         =require('axios')
const mysql         =require('mysql');

const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "5gws274aws",
    database: "ams_database"
})

const getUserDetails = (req,res,next)=>{
    const user_id = req.query.user_id;
    const query = 'select t.tenant_name as name,t.tenant_age as age,i.adhar_id as adhar_no,i.location as location,i.phone_no as phone_no,u.email as email from identity as i join (tenant as t join account_details as u on t.user_id=u.user_id) on i.adhar_id=t.adhar_no where u.user_id=?'
    connection.query(query,[user_id],(error,results,fields)=>{
        if(error){
            console.error('Error fetching data: ',error)
            res.status(500).json({error:'Error fetching data'})
            return
        }
        res.status(200).json(results)
    })
}

module.exports = {
    getUserDetails
}