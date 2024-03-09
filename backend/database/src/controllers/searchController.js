const axios         =require('axios')
const mysql         =require('mysql')

const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "5gws274aws",
    database: "ams_database"
})

const searchHouse = (req, res, next) => {
    console.log(req.body)
    const city = req.query.city;

    const query = 'SELECT h.house_no, h.block_no FROM (house h JOIN block b ON h.block_no=b.block_no) WHERE b.city=? AND h.occupancy_status IS NULL';

    connection.query(query, [city], (error, results, fields) => {
        if (error) {
            console.error('Error executing query:', error);

            return res.status(500).json({ error: 'Error executing query' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'No houses found for the specified city' });
        }

        res.json(results);
    });
};


const getHouseDetails = (req,res,next)=>{
    const house_no = req.body.room_no

    const query = 'select house_no, house_type, house_floor, owner_name, phone_no from house h join (owner o join identity i on o.adhar_no=i.adhar_id) as c on h.owner_id=c.owner_id where house_no=?'
    connection.query(query,[house_no],(error,results,fields)=>{
        if(error){
            console.error('Error fetching sql data:', error)
            res.status(500).json({ error: 'Error fetching data' })
            return
        }
        axios.post('http://localhost:3000/api/house/getHouseFeatureandDesc',{house_no: house_no })
        .then(response => {
            const result = {
                sqlData: results,
                nosqlData: response.data.map(({ house_no, ...rest }) => rest) 
            }
            res.status(200).json(result)
        })
        .catch(error => {
            console.error('Error fetching data from API:', error)
            res.status(500).json({ error: 'Error fetching nosql data from API' })
        })
    })
}

module.exports = {
    searchHouse, getHouseDetails
}
