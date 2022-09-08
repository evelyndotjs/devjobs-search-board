import React from "react";
import Button from "@mui/material/Button";

export default function StyledButton({ style, text, onClick }) {
  const purpleStyle = {
    backgroundColor: "#5964E0",
    color: "#fff",
    fontWeight: "700",
    lineHeight: "20px",
    borderRadius: "5px",
    textTransform: "none",
    width: "123px",
    height: "48px",
  };

  return (
    <Button
      variant="contained"
      style={{ ...style, ...purpleStyle }}
      onClick={onClick}
      text={text}
    >
      {text}
    </Button>
  );
}
