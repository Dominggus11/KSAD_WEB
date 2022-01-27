function validasi()
{
    var user = "admin";
    var pass = "admin";
    var username = document.forms["formLogin"]["username"].value;
    var password = document.forms["formLogin"]["password"].value;
    if( username == user && password == pass)
    {
        return true;
    }
    else if(username =="" && password =="")
    {
        alert("Username dan Password Masih Kosong !!!");
        return false;
    }
    else if(username !="" && password =="") 
    {
        alert("Password Masih Kosong !!!");
        return false;
    }
    else if(username =="" && password !="") 
    {
        alert("Username Masih Kosong !!!");
        return false;
    }
    else if(username != user && password == pass)
    {
        alert("Username Tidak Valid !!!");
        return false;
    }
    else if (username == user && password != pass)
    {
        alert("Password Tidak Valid !!!");
        return false;
    }
    else {
        alert("Username dan Password Salah !!!");
        return false;
    }
}

function exit() 
{
    var temp = confirm("yakin ingin Keluar ??");
    if(temp === true){
        window.location = "login.html";
    }
}