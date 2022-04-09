import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import "./form1.css";
import "bootstrap/dist/css/bootstrap.min.css";

const mystyle = {
  color: "#010606",
  backgroundColor: "#01bf71",
  paddingLeft: "50px",
  paddingRight:"50px",
  paddingTop:"10px",
  paddingBottom:"10px",
  margin:"0 auto",
  // marginLeft:"300px",
  // textAlign:"center",
  // alignItems:"center",
  cursor:"pointer",
  display:"block",
  borderRadius:"50px",
  transition:"all 0.2s ease-in-out",
  "&:hover":{
      transition: "all 0.2s ease-in-out",
      color: "#010606",
      background: "#fff",
  }
};
const Form1: React.FC<{
  id: string;
  title: string;
  onSubmitHandler: (event: React.FormEvent) => void;
  userRef: React.Ref<HTMLInputElement>;
  placeholder: string;
  btnText: string;
}> = (props) => {
  const [name, setName] = useState("");
  return (
    <div className="form1container" id={props.id}>
      <div className="header">
        <h1 className="title">{props.title}</h1>
      </div>
      <div className="formBody1">
        <form
          className="form1"
          onSubmit={(e: React.FormEvent) => {
            props.onSubmitHandler(e);
            setName("");
          }}
        >
          <InputGroup size="lg">
            <FormControl
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              type="text"
              placeholder={props.placeholder}
              ref={props.userRef}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </InputGroup>
          <div style={{ height: "20px" }}></div>
          <Button
            size="lg"
            className="btn"
            style={mystyle}
            type="submit"
            disabled={name === ""}
          >
            {props.btnText}
          </Button>
          {/* <button className="btn" type="submit" disabled={name === ''}>{props.btnText}</button> */}
        </form>
      </div>
    </div>
  );
};

export default Form1;
