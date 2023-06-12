const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;

    
        const countryCode = document.getElementById("countryCode").value;
        const phoneNumber = document.getElementById("number").value;
        
        const formattedNumber = countryCode + phoneNumber;
        
        console.log("Форматований номер: " + formattedNumber);
    
        const params = {
            // toName: document.getElementById('toName').value,
            fromName: document.getElementById('fromName').value,
            email: email,
            number: formattedNumber
            // number: document.getElementById('number').value
            // message: document.getElementById('message').value
        };

        emailjs.send('service_08dnbzq', 'template_zomzxcr', params)
          .then(function(response) {
            console.log('Email sent successfully:', response.status, response.text);
          }, function(error) {
            console.log('Error sending email:', error);
          });
          form.reset();
});
