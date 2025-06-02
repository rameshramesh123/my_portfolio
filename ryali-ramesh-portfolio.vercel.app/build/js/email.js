function sendMail() {
    const params = {
        name: document.getElementById("fullName").value,
        email: "rjramesh976@gmail.com", // Replace with your email address
        message: document.getElementById("message").value,
    };


    console.log(params);

    const serviceID = "service_2cdrrtk";
    const templateID = "template_no87lvp";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("fullName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!!")

        })
        .catch(err => console.log(err));

}

document.getElementById('submit-btn').addEventListener('click', (event) => sendMail(event));