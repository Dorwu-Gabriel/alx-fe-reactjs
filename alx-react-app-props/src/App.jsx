import ProfilePage from './components/ProfilePage.jsx';
import UserContext from '../UserContext.js';
import UserProfile from '../../alx-react-app-new/src/components/UserProfile.jsx';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;

