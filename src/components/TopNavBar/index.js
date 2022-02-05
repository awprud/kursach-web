import React from "react";
import {Link} from "react-router-dom";
import "./index.css"
import SignInModal from "../AuthModal/SignInModal";
import useModal from "../../hooks/useModal";

const TopNavBar = () => {
    const {isOpen, toggle} = useModal();
    return (
        <div>
            <SignInModal
                isOpen={isOpen}
                toggle={toggle}
            />
            <div className="top-navigation">
                <div className="navigation-element">
                    <button
                        onClick={toggle}
                    >
                        WINES
                    </button>
                </div>
                <div className="navigation-element">
                    <Link to='/ask'>ASK CAVIST</Link>
                </div>
            </div>
        </div>
    );
}

export default TopNavBar;