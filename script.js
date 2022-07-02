function loginUser() {
  let userName = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value

 if(userName == null || userName == "" ){
    return
  }
  else if(userName.length <= 10 && password === "" && confirmPassword === ""){
    alert(`Please enter password`)
  }
  else if(userName.length <= 10 && password === confirmPassword){
    alert(`Hello ${userName}, login successful!`)
  }
  else if (userName.length > 10 ){
    alert("invalid input! Username must be less than 10 characters.")
  }
  else if (password !== confirmPassword ){
    alert("invalid input! Password does not match! ")
  }
  
  else{
    alert("login failed!!")
  }
}




