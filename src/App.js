import AppBar from "./Components/AppBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import UserListPage from "./Components/UserListPage";
import { useState } from "react";

function App() {
  const [login, setLogIn] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);
  return (
    <>
      <AppBar
        login={login}
        signUp={signUp}
        setLogIn={setLogIn}
        setSignUp={setSignUp}
        isLogIn={isLogIn}
        setIsLogIn={setIsLogIn}
      />
      <Routes>
        <Route path="/" element={<HomePage setLogIn={setLogIn} />}></Route>
        <Route path="/userlist" element={<UserListPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
