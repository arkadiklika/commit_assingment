import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import userApi from "../services/userApi";

const UserInfoCard = ({
  username: initialUsername,
  phoneNumber: initialPhoneNumber,
}) => {
  const [username, setUsername] = useState(initialUsername);
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      // Display error message if token doesn't exist
      setUsername("User Error");
      setPhoneNumber("Please fill your data in the Form tab");
    } else {
      // Fetch current user data
      getCurrentUserData(token);
    }
  }, []);

  const getCurrentUserData = async (token) => {
    try {
      const currentUserData = await userApi.getCurrentUser(token);
      setUsername(currentUserData.username);
      setPhoneNumber(currentUserData.phoneNumber);
    } catch (error) {
      console.error("Error fetching current user data:", error);
      // Handle error accordingly, e.g., display error message
      setUsername("User Error");
      setPhoneNumber("Error fetching user data");
    }
  };

  return (
    <Card
      variant="outlined"
      style={{ maxWidth: 300, margin: "auto", marginTop: 20 }}
    >
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Username
        </Typography>
        <Typography variant="body1" gutterBottom>
          {username}
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Phone Number
        </Typography>
        <Typography variant="body1" gutterBottom>
          {phoneNumber}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserInfoCard;
