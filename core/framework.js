const http = require("http");

function Server(port){
    http.createServer(router).listen(port,()=>console.log("Servidor inciado"));

    let routes = [];
    
    function router(req,res) {
        let currentPage = routes.find(data => data.route === req.url);
        if(!currentPage) res.write('Pagina no encontrada.');
        res.write(currentPage ? currentPage.content : '');
        res.end();
    }

    function get(routeGet,contentGet, callback){
        routes.push({route:routeGet,content:contentGet});
        if(callback) callback();
    }

    return {get};
}


module.exports = Server;
