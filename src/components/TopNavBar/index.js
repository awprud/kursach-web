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
                    <span
                        hidden={!user || !user.token}
                    >
                        {user.username}
                    </span>
                    <button
                        onClick={toggleSignup}
                        className="signup-button"
                        hidden={!!user && !!user.token}
                    >
                        Sign up
                    </button>
                    <span
                        hidden={!!user && !!user.token}
                    >
                        or
                    </span>
                    <button
                        onClick={toggle}
                        className="login-button"
                        hidden={!!user && !!user.token}
                    >
                        Sign in
                    </button>
                    <button
                        onClick={() => {
                            AuthService.signOut();
                            window.location.reload();
                        }}
                        className="signup-button"
                        hidden={!user || !user.token}
                    >
                        Log out
                    </button>
                </div>
                <div>
                </div>
            </div>
        </>
    );
}

export default TopNavBar;