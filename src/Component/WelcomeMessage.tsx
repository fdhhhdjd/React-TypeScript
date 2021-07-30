import { Box, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
interface WelcomeMessageProps {
  position: string;
  country?: string;
}
//ctrl+. la import
const WelcomeMessage = ({
  position,
  country = "Việt Nam",
}: WelcomeMessageProps) => {
  const {
    authInfo: { username },
  } = useContext(AuthContext);
  return (
    <Box mb={1}>
      Welcome {username} to {position} Form {country}
    </Box>
  );
};

export default WelcomeMessage;
