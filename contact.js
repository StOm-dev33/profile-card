const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    let valid = true;

    if (!name)
    {
        document.getElementById('error-name').textContent = 'Name is required'; valid = false;
    }
    else
    {document.getElementById('error-name').textContent = '';}
    if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('error-email').textContent = 'Enter a valid email';
        valid = false;
    }
    else 
    {
        document.getElementById('error-email').textContent = '';
    }
    if (message.length < 10) {
        document.getElementById('error-message').textContent = 'Message too short';
        valid = false;
    }
    else {
        document.getElementById('error-message').textContent = '';
    }
    if (valid) {
        document.getElementById('sucess').hidden = false;
        form.reset();
    }
});