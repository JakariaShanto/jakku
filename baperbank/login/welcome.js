document.getElementById('btn-submit').addEventListener('click', function(){

    const userEmail = document.getElementById('e-mail');
    const email = userEmail.value;
    const userpassword = document.getElementById('e-password');
    const password = userpassword.value;
    console.log(email, password);
    if (email === "jakaria@gmail.com" && password === "jack"){
      console.log('valid user')
       window.location.href = 'bank.html';
    }else{
      console.log('invalid user')
      alert('please inter a valid email and password')
    }
  })