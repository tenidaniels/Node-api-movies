module.exports = (req, res)=> {
    let baseUrl= req.url.substring(0, req.url.lastIndex);
 
    let id= req.url.split("/")[3];
    const regexV4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
    console.log(id)
   if(req.url === "/api/movies") {
    res.statusCode= 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(req.movies));
    res.end();
 }
 else if(regexV4.test(id)){
    res.writeHead(400, {"Content-Type": "application/json"});
    res.end(JSON.stringify({title:"validation failed", message: "UUID is not valid"}) );

 }
    else  {
        res.writeHead(404, {"Content-Type": "application/json"});
        
        res.end(JSON.stringify({title:"Not found", message: "Route not found"}) );
    }
  
};
