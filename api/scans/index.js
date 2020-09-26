module.exports = async function (context, req) {
    
    const scans = [{plate:"XXX", color:"#000000", speed:18.7, time:1601148057}];

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {scans},
        header: {'Content-Type':'application/json'}
    };
}