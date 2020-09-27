module.exports = async function (context, req) {
    
    const messageRows = [];
    const mysql = require("mysql");
    
    var con = mysql.createConnection({
        host: process.env["host"],
        user: process.env["user"],
        password: process.env["password"],
        database: process.env["database"]
    });

    async function getMySQL() {
        return new Promise(function(resolve, reject) {
            con.query("SELECT * FROM messages", function (err, result, fields) {
                if (err) throw err;
    
                for (var i = 0;i < result.length; i++) {
                    messageRows.push({service:result[i].id,
                        message:result[i].message,
                        updated:result[i].updated});
                    
                }
                
                console.log({messages:messageRows});
    
                resolve(messageRows);
            });
        });
    }
    
    

    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {messages:await getMySQL()},
        header: {'Content-Type':'application/json'}
    };
    
}