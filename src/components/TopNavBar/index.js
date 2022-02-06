import React, {useState} from "react";
import "./index.css"
import SignInModal from "../AuthModal/SignInModal";
import useModal from "../../hooks/useModal";
import AuthService from "../../services/AuthService";
import SignUpModal from "../AuthModal/SignUpModal";

const TopNavBar = () => {
    const {isOpen, toggle} = useModal();
    const {isOpen: isSignupOpen, toggle: toggleSignup} = useModal();
    const [user, setUser] = useState(AuthService.getUser());

    return (
        <>
            <SignInModal
                isOpen={isOpen}
                toggle={toggle}
                setUser={setUser}
            />
            <SignUpModal
                isOpen={isSignupOpen}
                toggle={toggleSignup}
                setUser={setUser}
            />
            <div className="top-navigation">
                <div className="logo">
                    <span>MtoM</span>
                </div>
                <div className="center-group">
                    <button onClick={toggleSignup} className="signup-button">
                        Sign up
                    </button>
                    <span>or</span>
                    <button onClick={toggle} className="login-button">
                        Sign in
                    </button>
                </div>
                <div>
                    <button
                        onClick={toggleSignup}
                        className="signup-button"
                        hidden={!!user || !!user.token}
                    >
                        Log out
                    </button>
                </div>
            </div>
        </>
    );
}

export default TopNavBar;