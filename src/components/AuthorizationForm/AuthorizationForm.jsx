import { useState } from 'react';
import classes from "./AuthorizationForm.module.scss";
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { mockFetch } from '../../api/api';
import { passwordValidation, emailValidation } from '../../utils/formFieldsValidation';

const AuthorizationForm = () => {
    const [formData, setFormData] = useState({
        password: {
            value: "",
            valid: true,
            message: "",
        },
        email: {
            value: "",
            valid: true,
            message: "",
        },
    });

    const formValidation = () => {
        passwordValidation(formData);
        emailValidation(formData);
        setFormData((prevState) => ({
            ...prevState,
            valid: prevState.email.valid && prevState.password.valid,
        }));
    };

    return (
        <div className={classes.container}>
            <form className={classes.form} action="authorization">
                <Input
                    title="Введите е-mail"
                    type="email"
                    name="email"
                    placeholder={"E-mail"}
                    value={formData.email.value}
                    onChange={(event) => {
                        setFormData((prevState) => ({
                            ...prevState,
                            email: { ...prevState.email, value: event.target.value },
                        }));
                    }}
                    isValid={formData.email}
                />
                <Input
                    title="Введите пароль"
                    name="password"
                    placeholder={"Пароль"}
                    value={formData.password.value}
                    onChange={(event) => {
                        setFormData((prevState) => ({
                            ...prevState,
                            password: { ...prevState.password, value: event.target.value },
                        }));
                    }}
                    isValid={formData.password}
                    isVisible={true}
                />
                <Button className={classes.submitButton}
                    onClick={(event) => {
                        event.preventDefault();
                        formValidation();
                        if (formData.valid) {
                            mockFetch(formData);
                        }
                    }}>
                    Отправить
                </Button>
            </form>
        </div>
    );
};

export default AuthorizationForm;
