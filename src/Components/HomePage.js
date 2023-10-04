import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage({ setLogIn }) {
  function handleClick() {
    setLogIn(true);
  }
  return (
    <main
      className="d-flex justify-content-center align-items-center text-center py-5"
      style={{
        height: "100vh",
        backgroundImage: "url(./images/background.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div>
        <h2 className="fw-bold text-light">Manage your team, faster!</h2>
        <p className="px-5 py-3 text-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam veniam
          similique ex maxime rem optio cum quas, possimus tempora asperiores
          sed illo voluptates. Odio asperiores similique in beatae, suscipit
          delectus?
        </p>
        <Button onClick={handleClick}>Lets Begin</Button>
      </div>
    </main>
  );
}

export default HomePage;
