import React, {useState} from "react";
import "./index.css"
import SignInModal from "../AuthModal/SignInModal";
import useModal from "../../hooks/useModal";
import AuthService from "../../services/AuthService";
import {Link} from "react-router-dom";
import {roleAdmin, roleUser} from "../../constants";
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
                {!user || !user.token ? (
                    <>
                        <button onClick={toggleSignup} className="signup-button">
                            Sign up
                        </button>
                        <button onClick={toggle} className="login-button">
                            Sign in
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={() => {
                                AuthService.signOut()
                                setUser(null);
                                window.location.reload();
                            }}
                            className="logout-button"
                        >
                            Log out
                        </button>
                        <span className="username">{user.username}</span>
                        {user.role === roleUser &&
                        <Link to="/my-orders/">Personal page</Link>
                        }
                        {user.role === roleAdmin &&
                        <Link to="/dashboard-orders/">Orders dashboard</Link>
                        }
                        <Link to="/">Books dashboard</Link>
                    </>
                )}
            </div>
        </>
    );
}

export default TopNavBar;