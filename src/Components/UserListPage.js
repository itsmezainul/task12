import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

function UserListPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    async function fetchUserData() {
      setIsLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log(data);
      setUserList(data);
      setIsLoading(false);
    }
    fetchUserData();
  }, []);
  return (
    <main>
      {isLoading && <Loader />}
      {!isLoading && <ListItems userList={userList} />}
    </main>
  );
}

function Loader() {
  return (
    <p
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <span className="fs-1 fw-bold">Loading...</span>
    </p>
  );
}

function ListItems({ userList }) {
  return (
    <Container className="text-center">
      <Row
        className=""
        style={{
          marginTop: "100px",
        }}
      >
        {userList.map((val) => (
          <ListItem val={val} key={val.id} />
        ))}
      </Row>
    </Container>
  );
}

function ListItem({ val }) {
  return (
    <Col xs={12} md={6} lg={4} xl={3} className="mb-5">
      <Card
        className="mx-auto p-0"
        style={{
          maxWidth: "320px",
          minHeight: "450px",
        }}
      >
        <Card.Body className="p-0">
          <div className="cardImage">
            <img
              src={`https://i.pravatar.cc/100?u=${val.id}`}
              className="rounded-circle"
              alt=""
            />
          </div>
          <div>
            <h3 className="mt-5 pt-4 fw-bold fs-5">{val.name}</h3>
            <p>{val.address.city}</p>
            <p>
              <i className="bi bi-envelope-at-fill"> {val.email}</i>
            </p>
            <p>
              <i className="bi bi-phone-fill"> {val.website}</i>
            </p>
            <p>
              <i className="bi bi-mailbox2-flag">
                {" "}
                {val.address.street + " " + val.address.suite}
              </i>
            </p>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default UserListPage;
