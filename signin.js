function showpassword(){
    let a=document.getElementById('pass1');
    let b=document.getElementById('pass2');
    if(a.type=="password" || b.type=="password" )
    {
    b.type="text"; 
    a.type="text";
    }
    else
    {
    b.type="password";
    a.type="password";
    }
}