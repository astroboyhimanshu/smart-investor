import { Button, Typography, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSIPCalculatorClick = () => {
    navigate("/sip-planner");
  };

  const handleInvestmentPlannerClick = () => {
    navigate("/investment-planner");
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

          <div className="flex justify-center mb-6">
            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSIPCalculatorClick}
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
                SIP Calculator
              </Button>
            </Box>

            <Button
              variant="contained"
              color="primary"
              onClick={handleInvestmentPlannerClick}
              sx={{
                padding: "10px 24px",
                marginLeft: "15px",
                fontSize: "1rem",
                fontWeight: "bold",
                transition: "background 0.3s ease",
                ":hover": {
                  backgroundColor: "#4CAF50",
                },
              }}
            >
              Investment Planner
            </Button>
          </div>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Stop Thinking! Just start your investment journey today.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
