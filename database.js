// to run: node database.js
// to break control C
const mysql = require("mysql");

const properties = {
    host: "34.126.172.116",
    user: "root",
    password: "fintechsglab",
    port: 3306,
    database: "market",
};
let connection = mysql.createConnection(properties);
connection.connect((error) => {
    if (error){
        console.error("Connection to MySQL failed! \n" + error);
    } else{
        console.log("Connected to MySQL!");
    }
});
module.exports = {
    connection,
};
// Can also select * from transaction etc.
// connection.query(
//     `select * from products`, //mysql query in strong format
//     (error, result) => {
//         if(error){
//             console.log(error);
//         } else{
//             console.log(result);
//         }
//     }
// );
