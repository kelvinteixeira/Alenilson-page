import { Grid, useMediaQuery } from "@mui/material";

export const FirstSection = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isTablet = useMediaQuery("(max-width:820px)");
  return (
    <Grid
      width={"100%"}
      height={isMobile ? "15vh" : isTablet ? "40vh" : "100vh"}
      sx={
        {
          backgroundColor: "#a9bad390",
        }
      }
    >
       <img
        style={{
          width: "100%",
          height: isMobile ? "15vh" : isTablet ? "40vh" : "100vh",
          objectFit: "cover",
          position: "absolute",
          // filter: "blur(5px)",
          top: 0,
          left: 0,
          zIndex: -1,
          content: "",
        }}
        alt=""
        src="../images/bg1.jpg"
      />
      <Grid container justifyContent={"center"}>
        <img
          style={{
            width: "50%",
            height: isMobile ? "15vh" : isTablet ? "40vh" : "100vh",
            objectFit: "contain",
            top: 0,
            left: 0,
            zIndex: 1,
            content: "",
          }}
          alt=""
          src="../images/logo.png"
        />
      </Grid>
      <Grid
        container
        height={isMobile ? "15vh" : isTablet ? "40vh" : "100vh"}
        justifyContent={"center"}
        direction={"column"}
      >
        {/* <Typography
          className="text-gradient"
          fontSize={isMobile ? 30 : isTablet ? 60 : 90}
          align="center"
        >
          Alenilson Cruz
        </Typography>
        <Typography
          fontWeight={"bold"}
          variant="overline"
          align="center"
          className="text-gradient"
          fontSize={isMobile ? 10 : isTablet ? 20 : 30}
          sx={{
            letterSpacing: 10,
            animation: isMobile ? "" : "slideRight 1s forwards",
          }}
        >
          Psicologia e hipnoterapia
        </Typography> */}
      </Grid>
    </Grid>
  );
};
