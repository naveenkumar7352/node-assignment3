const express=require("express")
const app= express();
const middleware1=function(req,res,next){
    // console.log("middleware 1");
    if(req.params.user_id==100){
        next();
    }
    else{
        res.send("invalid user");
    }
}

// app.use(middleware1) // use to complete app
// app.get("/1",function(req,res){
//     res.send("main route1");

// })
// app.get("/2",function(req,res){
//     res.send("main route2");

// })
// app.get("/3",function(req,res){
//     res.send("main route3");

// })
// app.get("/4",function(req,res){
//     res.send("main route4");

// })
app.get("/:user_id/:product_id", middleware1,function(req,res){
    // console.log(req.params.user_id);
    console.log(req.params)//url parameters
    console.log(req.query);// query parameters
    res.send("success api");
});

app.listen(3011);
// http://localhost:3011/100?user=a&name=naveen
// Create an API call: unexpected keyword
// /userUse a middleware :unexpected keyword
// Check whether the user_id :unexpected keyword
// in query parameter is greater than 10000
// >10000 success  : expected
// else error: declaration or expected