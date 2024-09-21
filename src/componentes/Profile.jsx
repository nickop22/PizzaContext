import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <>
      <p>CorreoCualquiera@mamamia.com</p>
      <Link to="/">
        <Button variant="outline-warning" className="text-white">
          Logout
        </Button>
      </Link>
    </>
  );
}

export default Profile;
