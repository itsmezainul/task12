import AppBar from "./Components/AppBar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import UserListPage from "./Components/UserListPage";

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/userlist" element={<UserListPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
