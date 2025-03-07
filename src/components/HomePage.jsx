import { useTheme } from "@emotion/react";
import { Box, Card, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Heading from "../styled/Heading";
import { useSelector } from "react-redux";
import Appointments from "./Appointments";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PhoneIcon from "@mui/icons-material/Phone";
import SubHeading from "../styled/SubHeading";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state);
  const isMobileScreen = useMediaQuery("(max-width: 1000px)");
  const defaultBack = palette.background.default;
  const main = palette.primary.main;
  const alt = palette.background.alt;
  const neutral = palette.neutral.light;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "90vh",
        backgroundColor: defaultBack,
      }}
    >
      <Card
        sx={{
          width: isMobileScreen ? "90vw" : "60vw",
          backgroundColor: alt,
          borderRadius: "0.5rem",
          margin: "2rem auto",
          maxHeight: "70vh",
        }}
        elevation={3}
      >
        <Stack
          gap={2}
          alignItems={"center"}
          sx={{
            minHeight: "70vh",
            padding: "2rem",
          }}
        >
          <Heading
            style={{
              color: main,
            }}
          >
            {`Hey, ${user?.fullName}`}
          </Heading>
          <Appointments />
          <Card
            sx={{
              borderRadius: "0.5rem",
              padding: "1rem",
              backgroundColor: main,
              cursor: "pointer",
              width: isMobileScreen ? '85vw' : '35vw'
            }}
            elevation={2}
            onClick={() => navigate("/book")}
          >
            <Stack
              direction="row"
              gap={2}
              alignItems="center"
              justifyContent="center"
            >
              <CalendarMonthIcon sx={{ fontSize: "3rem", color: neutral }} />
              <Stack gap={0.5} justifyContent="center">
                <SubHeading style={{ color: neutral }}>
                  Book Appointment
                </SubHeading>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: neutral,
                    fontSize: isMobileScreen ? "0.8rem" : "1rem",
                    fontWeight: 500,
                  }}
                >
                  Schedule an appointment with our licensed professional
                </Typography>
              </Stack>
            </Stack>
          </Card>
          <Card
            sx={{
              borderRadius: "0.5rem",
              padding: "1rem",
              backgroundColor: main,
              width: isMobileScreen ? '85vw' : '35vw'
            }}
            elevation={2}
          >
            <Stack
              direction="row"
              gap={2}
              alignItems="center"
              justifyContent="center"
            >
              <PhoneIcon sx={{ fontSize: "3rem", color: neutral }} />
              <Stack gap={0.5} justifyContent="center">
                <SubHeading style={{ color: neutral }}>
                  Call the Office
                </SubHeading>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: neutral,
                    fontSize: isMobileScreen ? "0.8rem" : "1rem",
                    fontWeight: 500,
                  }}
                >
                  Give us a call in order to schedule your apppointment.
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Card>
    </Box>
  );
};

export default HomePage;
