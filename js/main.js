function show(){
    var pass = document.getElementById('password');
    var eye = document.querySelector('.eye-icon');
    if(pass.type==='password'){
        pass.type='text';
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');
    }
    else{
        pass.type='password';
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');
    }

}

