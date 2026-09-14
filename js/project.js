
document.querySelectorAll('.category li').forEach(item => {
  item.onmouseover = () => item.style.backgroundColor = 'rgb(28, 82, 28)';
  item.onmouseout = () => item.style.backgroundColor = '';
});

function validform()
{
		var name= document.getElementById("inputname").value;
		var message= document.getElementById("inputmessage").value;
		var email= document.getElementById("inputemail").value;

		if(name.length <= 0)
		{
			alert("Please Enter name !");
			return false;
		}
		if(message.length <= 0)
		{
			alert("Please Enter message !");
			return false;
		}
		if(email.length <= 0)
		{
			alert("Please Enter Email !");
			return false;
		}
 alert("Your message has been sent successfully!");
           		
}
