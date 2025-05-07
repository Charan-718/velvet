document.addEventListener('DOMContentLoaded', function () {

    const emailEl = document.getElementById('email');
    const passwordEl = document.getElementById('password');
    const letsGoBtn = document.querySelector('.lets-go-btn');

    letsGoBtn.addEventListener('click',function(){
        const emailId=emailEl.value.trim();
        const password=passwordEl.value.trim();

        if(
            (emailId==="yarnagulapoornapranathi@gmail.com" && password==="Red Velvet") ||
            (emailId==="charan06082004@gmail.com" && password==="Oye")
        ){
            window.location.href="main-page/my_page.html";
        }else if(emailId!=="yarnagulapoornapranathi@gmail.com") {
            alert("Have you forgotten your email..!");
        }else{
            alert("Enter password carefully...");
        }
    });

});