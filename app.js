var koa = require("koa");
var app = koa();

app.use(function *(){
    this.body = "Hello World";
});

app.listen(3000);
console.log("The app is running on port number 3000");