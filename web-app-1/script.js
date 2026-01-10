function dispMessage(){
    // a=10
    // b=20
    // c=a+b
    //alert("Hello")
    //alert(document.getElementById("txtEmail").value)
    //lblMessage.innerHTML=document.getElementById("txtEmail").value + document.getElementById("password").value
    //lblpassword.innerHTML=document.getElementById("password").value
    let email = document.getElementById("txtEmail").value;
    let password = document.getElementById("password").value;
    if (email === "john@gmail.com" && password === "1234"){
        lblMessage.innerHTML="Wellcome";
    }
    else{
        lblMessage.innerHTML = "Access Denied";
    }
}