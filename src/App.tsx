import Loader from "./Components/Loader/Loader";
import WelcomeUserDialog from "./Components/Dialogs/WelcomeUserDialog/WelcomeUserDialog";
import { useUserContext } from "./Context/UserContext";
import Layout from "./Pages/Layout";

export default function App() {
    const user = useUserContext();
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
