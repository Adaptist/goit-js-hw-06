const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
        if ([...formData.values()].some(value => !value.trim())) {
            alert('Всі поля повинні бути заповнені');
            return;
        }
    
    const obj = {};

    formData.forEach((value, key) => obj[key] = value);
    console.log(obj);

    loginForm.reset();
});