const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;

    
        const countryCode = document.getElementById("countryCode").value;
        const phoneNumber = document.getElementById("number").value;
        
        const formattedNumber = countryCode + phoneNumber;
    
        const params = {
            fromName: document.getElementById('fromName').value,
            email: email,
            number: formattedNumber
        };

        emailjs.send('service_08dnbzq', 'template_zomzxcr', params)
          .then(function(response) {
            alert("Запис пройшов успішно");
            console.log('Email sent successfully:', response.status, response.text);
          }, function(error) {
            console.log('Error sending email:', error);
          });
          form.reset();
});
