function sendMail(params) {
     var tempParams = {
         subject:document.getElementById('subject').value,
         name:document.getElementById('name').value,
         email:document.getElementById('email').value,
         message:document.getElementById('msg').value
     }
     emailjs.send('service_nl1g7ly','template_76fe5j5',tempParams)
     .then(function(res){
         console.log("success",res.status);
         alert("Message Sent Successfully")
     })
}