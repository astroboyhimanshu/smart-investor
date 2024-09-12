import { Button, Typography, Container, Box } from "@mui/material";
import { useState } from "react";
import { RingLoader } from "react-spinners";
import SipPlanner from "./SipPlanner";

const HomePage = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [showSIPCalculator, setShowSIPCalculator] = useState(false);

  const handleButtonClick = () => {
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
      setShowSIPCalculator(true);
    }, 2000);
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #2e3192, #1bffff)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md">
        {!showSIPCalculator ? (
          <Box
            sx={{
              textAlign: "center",
              color: "white",
              py: 4,
              px: 3,
              borderRadius: 4,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Welcome to Nebula
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              Your portal to manage investments & drive growth.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
              {showSpinner ? (
                <RingLoader size={48} color={"#ffffff"} loading={showSpinner} />
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleButtonClick}
                  sx={{
                    padding: "10px 24px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    transition: "background 0.3s ease",
                    ":hover": {
                      backgroundColor: "#4CAF50",
                    },
                  }}
                >
                  Start
                </Button>
              )}
            </Box>

            <Typography variant="body1" sx={{ mb: 2 }}>
              Stop Thinking! Just start your investment journey today.
            </Typography>
          </Box>
        ) : (
          <SipPlanner />
        )}
      </Container>
    </div>
  );
};

export default HomePage;
