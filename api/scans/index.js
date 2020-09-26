module.exports = async function (context, req) {
    
    const scans = [{plate:"XXX", color:"#000000", speed:18.7, time:1601148057}];
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "yourusername",
        password: "yourpassword"
      });

    console.log(process.env.SQLConnectionString);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {scans},
        header: {'Content-Type':'application/json'}
    };
}