import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile"


function App() {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  return (
    <>
      <Header />
     {auth.isAuthenticated ? <UserProfile/>  :  <Auth /> }
      <Counter />
    </>
  );
}

export default App;
