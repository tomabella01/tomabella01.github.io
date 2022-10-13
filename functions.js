
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('sf4yCQZ3AFwQ9Imu9');
})();


window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

function Reload(){
    document.location.reload(true)
}

//send
const mail = document.getElementById("send_mail")
mail.addEventListener("click",function(){
    const name = document.getElementById("fullName")
    const email_id =  document.getElementById("email_id")
    const messages = document.getElementById("message")

    if(name.value.length === 0 || email_id.value.length ===0 || messages.value.length === 0 ){
        alert("Information Required!")
    }
    else{
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(email_id.value.match(pattern)){
            const params = {
                from_name: name.value,
                email_id:email_id.value,
                message: messages.value
            }
            emailjs.send("service_jakluhz","template_nu6dt2p",params).then(function (res){
                alert("Success!")
                name.value = ""
                email_id.value = ""
                messages.value = ""
            })
        }
        else{
            alert("Invalid Email!\nPlease input a valid email!")
                name.value = ""
                email_id.value = ""
                messages.value = ""
        }
    }
})