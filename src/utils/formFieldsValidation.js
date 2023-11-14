const passwordValidation = (formData) => {
    const { password } = formData;
    password.valid = password.value !== "";
    password.message = password.valid ? "" : "Это обязательное поле";
};

const emailValidation = (formData) => {
    const { email } = formData;
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    email.valid = email.value !== "" && emailRegex.test(email.value);
    email.message = email.valid
        ? ""
        : email.value === ""
        ? "Это обязательное поле"
        : "Введите корректный E-mail";
};

export{
    passwordValidation,
    emailValidation
}