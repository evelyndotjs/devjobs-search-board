import React from "react";
import Button from "@mui/material/Button";

export default function StyledButton({ style, text, onClick }) {
  const purpleStyle = {
    fontWeight: "700",
    lineHeight: "20px",
    borderRadius: "5px",
    textTransform: "none",
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
