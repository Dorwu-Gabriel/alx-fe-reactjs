import { useContext } from 'react';
import UserContext from '../../UserContext';

function MainContent() {
    const userData = useContext(UserContext);

    return (
        <main>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </main>
    );
}

export default MainContent;