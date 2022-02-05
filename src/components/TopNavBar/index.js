import React, {useState} from "react";
import "./index.css"
import SignInModal from "../AuthModal/SignInModal";
import useModal from "../../hooks/useModal";
import AuthService from "../../services/AuthService";

const TopNavBar = () => {
    const {isOpen, toggle} = useModal();
    const [user, setUser] = useState(AuthService.getUser());

    return (
        <div>
            <SignInModal
                isOpen={isOpen}
                toggle={toggle}
                setUser={setUser}
            />
            <div className="top-navigation">
                {!user || !user.token ? (
                    <>
                        <button className="signup-button">
                            Sign up
                        </button>
                        <button onClick={toggle} className="login-button">
                            Log in
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => {
                                AuthService.signOut()
                                setUser(null);
                            }}
                            className="logout-button"
                        >
                            Log out
                        </button>
                        <span className="username">{user.username}</span>
                    </>
                )}
            </div>
        </div>
    );
}

export default TopNavBar;