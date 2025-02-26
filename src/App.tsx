import Loader from "./Components/Loader/Loader";
import WelcomeUserDialog from "./Components/Dialogs/WelcomeUserDialog/WelcomeUserDialog";
import { useUserContext } from "./Context/UserContext";
import Layout from "./Pages/Layout";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function App() {
    const user = useUserContext();
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="App">
            {user.hasUser ? <Layout /> : null}

            <Loader isFinished={user.isFetched} />

            <WelcomeUserDialog
                open={user.isFetched && !user.hasUser}
                onSave={(username) => {
                    user.setUsername(username);
                }}
            />
        </div>
    );
}
