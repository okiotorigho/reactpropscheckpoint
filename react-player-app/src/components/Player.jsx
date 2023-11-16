import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const cardStyle = {
    flex: "0 0 18rem",
    margin: "10px",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const imageStyle = {
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    objectFit: "cover",
    height: "200px",
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={name} style={imageStyle} />
      <Card.Body>
        <Card.Title
          style={{
            marginBottom: "0.5rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          {name}
        </Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}
          <br />
          <strong>Nationality:</strong> {nationality}
          <br />
          <strong>Jersey Number:</strong> {jerseyNumber}
          <br />
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
