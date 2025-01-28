import { Button, Typography, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AiOutlineRocket, AiOutlineCalculator } from "react-icons/ai"; // Icons for AI and calculator

const HomePage = () => {
  const navigate = useNavigate();

  const handleSIPCalculatorClick = () => {
    navigate("/sip-planner");
  };

  const handleInvestmentPlannerClick = () => {
    navigate("/investment-options");
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Animated Background Particles */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "url('/particles.png')", // Add a subtle particle effect image
          opacity: 0.3,
          zIndex: 1,
          animation: "moveParticles 20s linear infinite",
        }}
      />

      <Container maxWidth="md" sx={{ zIndex: 2, position: "relative" }}>
        <Box
          sx={{
            textAlign: "center",
            color: "white",
            py: 6,
            px: 4,
            borderRadius: 4,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(12px)",
            boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.3)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 3,
              fontFamily: "Poppins, sans-serif",
              background: "linear-gradient(45deg, #00d2ff, #3a7bd5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Welcome to Nebula
          </Typography>
          <Typography
            variant="h5"
            sx={{ mb: 4, color: "rgba(255, 255, 255, 0.8)" }}
          >
            Your AI-powered portal to manage investments & drive growth.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 3,
              mb: 6,
            }}
          >
            <Button
              variant="contained"
              startIcon={<AiOutlineCalculator size={24} />}
              onClick={handleSIPCalculatorClick}
              sx={{
                padding: "12px 32px",
                fontSize: "1rem",
                fontWeight: "bold",
                background: "linear-gradient(45deg, #00d2ff, #3a7bd5)",
                color: "white",
                borderRadius: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                ":hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 8px 24px rgba(0, 210, 255, 0.4)",
                },
              }}
            >
              SIP Calculator
            </Button>

            <Button
              variant="contained"
              startIcon={<AiOutlineRocket size={24} />}
              onClick={handleInvestmentPlannerClick}
              sx={{
                padding: "12px 32px",
                fontSize: "1rem",
                fontWeight: "bold",
                background: "linear-gradient(45deg, #ff6f61, #ff9a44)",
                color: "white",
                borderRadius: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                ":hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 8px 24px rgba(255, 111, 97, 0.4)",
                },
              }}
            >
              Investment Planner
            </Button>
          </Box>

          <Typography
            variant="body1"
            sx={{ mb: 2, color: "rgba(255, 255, 255, 0.8)" }}
          >
            Stop Thinking! Just start your investment journey today with Nebula.
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
