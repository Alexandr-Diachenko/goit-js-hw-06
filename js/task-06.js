

const inputRef = document.querySelector('#validation-input');

const symbolLength = Number(inputRef.dataset.length);

const onInputBlurAdd = event => {
    if (event.currentTarget.value.length === symbolLength) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    }
    else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
};

inputRef.addEventListener('blur', onInputBlurAdd);
