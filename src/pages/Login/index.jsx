import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";
import theme from "../../modules/styles/theme";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Automatically redirect to portfolio (bypass login)
    sessionStorage.setItem("userEmail", "test@accionlabs.com"); // mock email for testing
    navigate("/portfolio", { replace: true });
  }, [navigate]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper
        elevation={3}
        sx={{ padding: 4, textAlign: "center", maxWidth: 400 }}
      >
        <Typography variant="h6" gutterBottom>
          Redirecting to Portfolio...
        </Typography>

        <Typography variant="body2" color="textSecondary" gutterBottom>
          Please wait while we load your dashboard.
        </Typography>

        <Typography
          component="span"
          sx={{ fontWeight: "bold", color: theme.palette.highlight.main }}
        >
          New PMO Intranet
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoginPage;
