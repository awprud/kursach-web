import {useState} from "react";

const useNotification = (time) => {
    const [isShown, setIsShown] = useState(false);

    const show = () => {
        setIsShown(true);
        setTimeout(() => {
            setIsShown(false)
        }, time);
    }
    return {isShown, show};
}

export default useNotification;