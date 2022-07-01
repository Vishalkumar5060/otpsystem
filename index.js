var otp;

function sendEmail() {
    
    
    const email = document.getElementById('email').value;
    const password =document.getElementById('password').value;
    if(email == ""){
        alert("Please ! Enter Email id")
    }else if ( password == ""){
       alert("Please Enter Password")
    }else{
    otp = Math.floor(Math.random() * 1000000);
    
    Email.send({
        SecureToken: "04b28fef-ce8a-4c8c-b5e6-26f9d5d44d56",
        To: email,
        From: "5060vishalkumar@gmail.com",
        Subject: "Email Verification",
        Body: `Your otp is ${otp} `,
    }).then(
        message => {alert("OTP SEND SUCCESSFULLY")
        change();
});
    }
}

const change = () => {
     const add = document.createElement('div');
     add.classList.add('container')

     const code = `
     <div class="otp">
     <input type="number" placeholder="ENTER YOUR OTP" id="otp">
     <button class="btn" onclick="otpverification()">SUBMIT</button>
    </div>`

    add.insertAdjacentHTML('afterbegin', code);
    document.body.appendChild(add);
}


function otpverification() {
    const otprec = document.getElementById('otp').value;

    if (otprec == otp) {
        alert("Your Otp is Correct ! ")
      window.location.replace("https://www.youtube.com/c/CodeWithHarry");

    }
    else {
        alert("Please ! Enter Correct OTP")

    }
}


