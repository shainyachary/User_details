fetch('https://randomuser.me/api')
.then((res)=>{
    data = res.json();
    return data;
})
.then(function(data){
    console.log(data);
    var personalData = data.results[0];
    var img = personalData.picture.large;
    var name = personalData.name.first+" "+personalData.name.last;
    var email = personalData.email;
    var dob = new Date(personalData.dob.date);
    let day = dob.getDate();
    let month = dob.getMonth();
    let year = dob.getFullYear();
    var add = personalData.location.street.number+" "+personalData.location.street.name;
    var phone = personalData.phone;
    var pass = personalData.login.password;
    document.getElementById('email').innerHTML = email;
    document.getElementById('dob').innerHTML = day+'/'+month+'/'+year;
    document.getElementById('add').innerHTML = add;
    document.getElementById('phone').innerHTML = phone;
    document.getElementById('pass').innerHTML = pass;
    document.getElementById('img').src = img;
    document.getElementById('name').innerHTML = name;
})
.catch(function(error){
    console.log(error);
});

function showData(){
    var name = document.getElementById('name')
    if(name.style.visibility == 'visible')
    {
        name.style.visibility = 'hidden';
    }
    else{
        name.style.visibility = 'visible';
    }
}
function showEmail(){
    var email = document.getElementById('email')
    if(email.style.visibility == 'visible')
    {
        email.style.visibility = 'hidden';
    }
    else{
        email.style.visibility = 'visible';
    }
}
function showDob(){
    var dob = document.getElementById('dob')
    if(dob.style.visibility == 'visible')
    {
        dob.style.visibility = 'hidden';
    }
    else{
        dob.style.visibility = 'visible';
    }
}
function showAdd(){
    var add = document.getElementById('add')
    if(add.style.visibility == 'visible')
    {
        add.style.visibility = 'hidden';
    }
    else{
        add.style.visibility = 'visible';
    }
}function showPhone(){
    var phone = document.getElementById('phone')
    if(phone.style.visibility == 'visible')
    {
        phone.style.visibility = 'hidden';
    }
    else{
        phone.style.visibility = 'visible';
    }
}
function showPass(){
    var pass = document.getElementById('pass')
    if(pass.style.visibility == 'visible')
    {
        pass.style.visibility = 'hidden';
    }
    else{
        pass.style.visibility = 'visible';
    }
}
