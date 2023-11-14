import classes from "./Home.module.scss"
import AuthorizationForm from "../components/AuthorizationForm/AuthorizationForm"

import lineImage from "../assets/design/line.svg";

const Home = () => {
    return (
        <div className={classes.container}>
            <AuthorizationForm></AuthorizationForm>
            <div className={classes.line}>
                <img src={lineImage} alt="" />
            </div>
            <p className={classes.title}>AUTHORIZATION</p>
        </div>
    );
};

export default Home;