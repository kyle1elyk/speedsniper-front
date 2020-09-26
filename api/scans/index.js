module.exports = async function (context, req) {
    
    const scans = [];
    const mysql = require("mysql");
    
    var con = mysql.createConnection({
        host: process.env["ConnectionStrings:host"],
        user: process.env["ConnectionStrings:user"],
        password: process.env["ConnectionStrings:password"],
        database: process.env["ConnectionStrings:database"]
    });

    async function getMySQL() {
        return new Promise(function(resolve, reject) {
            con.query("SELECT * FROM scans", function (err, result, fields) {
                if (err) throw err;
    
                for (var i = 0;i < result.length; i++) {
                    scans.push({plate:result[i].plate,
                        color:result[i].color,
                        speed:result[i].speed,
                        time:result[i].time});
                    
                }
                
                console.log({scans});
    
                resolve(scans);
            });
        });
    }
    
    

    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {scans:await getMySQL()},
        header: {'Content-Type':'application/json'}
    };
    
}