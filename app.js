const express=require('express');
const bodyparser=require('body-parser');
const nodemailer=require('nodemailer');
const app=express();
app.use(express.static("style"));
app.use(bodyparser.urlencoded({extended:true}))// html file sai jo input lenge uske liye line 5,6 ka use kiya hai

app.post("/",function(req,res){
    const comn=req.body.message;
    const na=req.body.nameofperson;
    var transpoter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'sonaljha9142@gmail.com',
            pass:'trve xkbp vlnh ewjg'

        }
    })
    var mailoption={
        from:'sonaljha9142@gmail.com',
        to:req.body.username,
        cc:'sonaljha9142@gmail.com',
        subject:'Thanks for visiting my website and giving me feedback'+na,
        text:'Thanks for your message you have sent to us --->'+comn
    };
    transpoter.sendMail(mailoption,function(error,info){
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
            console.log('email sent'+info.response);
        }
    })
});

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    console.log("__dirname");
})







app.listen(1819,function(){
console.log("server started at 1819");
})