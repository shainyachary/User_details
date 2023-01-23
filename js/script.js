fetch('https://randomuser.me/api')
.then(function(res){
    data = res.json();
    return data;
})
.then(function(data){
    console.log(data);
    personalData = data.results[0];
    var profileImg = personalData.picture.large;
    var fullName = '<h3>Hi, My Name is </h3><h1>'+personalData.name.first + " " + personalData.name.last+'</h1>';
    document.querySelector('#content').innerHTML = fullName;
    document.querySelector('#userImg').src = profileImg;
})
.catch(function(error){
    error = 'API not found';
    alert(error);
});

document.getElementById('user1').addEventListener('mouseover',function(data)
{
    var fullName = personalData.name.first + " " + personalData.name.last;
    var content = document.querySelector('#content');
    content.innerHTML ='<h3>Hi, My Name is </h3><h1>'+fullName+'</h1>';
})

document.querySelector('#user2').addEventListener('mouseover',function(data)
{
    var email = personalData.email;
    var content = document.querySelector('#content');
    content.innerHTML ='<h3>My Email-id is </h3><h1>'+email+'</h1>';
})

document.querySelector('#user3').addEventListener('mouseover',function(data)
{
    var dob = new Date(personalData.dob.date);
    day = dob.getDate();
    month = dob.getMonth();
    year = dob.getFullYear();
    var content = document.querySelector('#content');
    content.innerHTML ='<h3>Born in </h3><h1>'+day+"/"+month+"/"+year+'<h1>';
})

document.querySelector('#user4').addEventListener('mouseover',function(data)
{
    var add = personalData.location.street.name+", "+personalData.location.state+", "+personalData.location.country+", "+personalData.location.postcode;
    var content = document.querySelector('#content');
    content.innerHTML ='<h3>My Location is </h3><h1>'+add+'</h1>';
})

document.querySelector('#user5').addEventListener('mouseover',function(data)
{
    var phone = personalData.phone;
    var content = document.querySelector('#content');
    content.innerHTML ='<h3>My Contact Number is </h3><h1>'+phone+'</h1>';
})

document.querySelector('#user6').addEventListener('mouseover',function(data)
{
    var pass = personalData.login.password;
    var content = document.querySelector('#content');
    content.innerHTML ='<h3>My Password is </h3><h1>'+pass+'</h1>';
})