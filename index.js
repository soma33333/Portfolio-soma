document.addEventListener("DOMContentLoaded", function() {

    const   text=`Hey there, my name's Somashekar N`;

    let index = 0;
    const speed = 50; // Adjust the speed here (milliseconds)
    const typewriterElement = document.getElementById("text1");

    const intervalId = setInterval(function() {
        if (index < text.length) {
            typewriterElement.innerHTML += text.charAt(index);
            index++;
        } else {
            clearInterval(intervalId);
        }
    }, speed);
});










function sendmail(event) {
    event.preventDefault();  // Prevents default form submission
    
    var params = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("pho").value,
        message: document.getElementById("msg").value,

    };

    emailjs.send("service_hhjx0qs", "template_e7wlccp", params)
    .then(function (response) {
        alert("Success! Email sent.");
        document.getElementById("form").reset();
    })
    .catch(function (error) {
        console.error("Failed to send email:", error);
    });
}

       
