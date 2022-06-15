import React from "react";

const Button = ({ children, style }) => {
  return <button style={style}>{children}</button>;
};

const ButtonEle = () => {
  return (
    <div style={{display:"flex", width:"80%" ,margin:" 100px auto"}} >
      <Button
        style={{
          borderColor: "#2491ff",
          backgroundColor: "#2491ff",
          color: "white",
          padding: "5px 13px",
          margin:"8px"
        }}
      >
        Primary Button
      </Button>
        <Button
            style={{
                borderColor: "#e6e7e6",
                padding: "6px 15px",
                margin:"8px"
              }}
      >Default Button</Button>
      <Button
            style={{
                border:"dashed",
                borderColor: "#e6e7e6",
                padding: "6px 15px",
                margin:"8px"
              }}
      >Dashed Button</Button>
      <Button
             style={{
                border:"none",
                backgroundColor: "white",
                padding: "6px 15px",
                margin:"8px"
              }}
      >Text Button</Button>
      <Button
            style={{
                border:"none",
                backgroundColor: "white",
                color:"#2491ff",
                margin:"8px"
              }}
      >Link Button</Button>
    </div>
  );
};

export default ButtonEle;
