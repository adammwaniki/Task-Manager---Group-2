import react from "react";
import { useHistory } from "react-router-dom";

function LogOut () {
    const history = useHistory();

    const navigateToLogin = () => {
        history.push('/LoginForm');
    };
    return(
        <div>
            <button onClick={navigateToLogin}>Go To Sign In</button>
        </div>
    )
};

export default LogOut;