var form=document.getElementById("myForm");form.addEventListener("submit",(function(e){e.preventDefault();var t=document.getElementById("email").value,n=document.getElementById("countryCode").value+document.getElementById("number").value,m={fromName:document.getElementById("fromName").value,email:t,number:n};emailjs.send("service_08dnbzq","template_zomzxcr",m).then((function(e){alert("Запис пройшов успішно"),console.log("Email sent successfully:",e.status,e.text)}),(function(e){console.log("Error sending email:",e)})),form.reset()}));
//# sourceMappingURL=index.a10dfcc7.js.map