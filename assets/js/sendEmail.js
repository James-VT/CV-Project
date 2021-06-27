function sendMail(contactForm) {
    emailjs.send("service_wvkwl78", "template_dtsj6ch", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
    function(response) {
        console.log("SUCCESS", response);
    },
    function(error) {
        console.log("FAILED", error);
    });
    return false;
}