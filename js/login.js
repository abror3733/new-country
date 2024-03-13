let elForm =document.querySelector(".login-form")

elForm.addEventListener("submit",function(evt){
evt.preventDefault()
 let data = {
  login:evt.target[0].value,
  password:evt.target[1].value
 }

 let confirm = {
  login:"Abror",
  password:"12345"
 }
 if(data.login == confirm.login && data.password == confirm.password){
  window.localStorage.setItem("user",JSON.stringify(data))
  setTimeout(()=>{
    elForm.innerHTML=`
    <img class="loading-img" src="./images/loading.png" width="130" height="130"/>
    `
    setTimeout(()=>{
    window.location ="index.html"
    },2000)
  },0)
 }
 else{
  alert("Boshqa foydalanuvchi kirishi mumkin emas!")
 }
//










//  fetch(API,{
//   method:"POST",
//   body:JSON.stringify(data),
//   headers:{
//     "content-type":"application/json"
//   }
//  })
//  .then(res=> res.json())
//  .then(data=>{
//   if(data.token){
//     window.localStorage.setItem("token",data.token)
//    setTimeout(()=>{
//     window.location="index.html"
//    },2000)
//   }
//  })
})