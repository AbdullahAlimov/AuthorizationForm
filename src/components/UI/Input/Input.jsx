import classes from "./Input.module.scss"
import PropTypes from 'prop-types';
import visibleImage from "../../../assets/icons/visible.png";
import unvisibleImage from "../../../assets/icons/unvisible.png";
import { useState } from "react";

const Input = ({ title, isValid, isVisible=false, ...restProps }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div className={classes.container}>
            <p className={classes.title}>{title}</p>
            <input {...restProps}
                className={classes.input}
                type={isVisible ? (passwordVisible ? "text" : "password") : restProps.value}

            />
            {
                isVisible &&
                <div className={classes.changeVisible} onClick={() => setPasswordVisible(!passwordVisible)}>
                    <img src={passwordVisible ? visibleImage : unvisibleImage} alt="Change visible password" />
                </div>
            }
            {
                !isValid.valid && 
                    <p className={classes.message}>{isValid.message}</p>
            }
        </div>
    );
};

Input.propTypes = {
    title: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
    isValid: PropTypes.shape({
        valid: PropTypes.bool.isRequired,
        message: PropTypes.string.isRequired,
    }).isRequired,
};

export default Input;