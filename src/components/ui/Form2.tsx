import React, { useState } from 'react';
import { Button, Form,Row,InputGroup,FormControl,Col } from 'react-bootstrap';
import DropDown from './Dropdown';
import './form2.css'
const mystyle = {
  color: "#010606",
  backgroundColor: "#01bf71",
  paddingLeft: "50px",
  paddingRight:"50px",
  paddingTop:"10px",
  paddingBottom:"10px",
  margin:"0 auto",
  cursor:"pointer",
  display:"block",
  marginTop:"20px",
  borderRadius:"50px",
  transition:"all 0.2s ease-in-out",
};
const boxx={
  // border:"2px solid black",
  // borderRadius:"20px"
};
const Form2: React.FC<{
  id: string;
  title: string;
  onSubmitHandler: (event: React.FormEvent) => void;
  user1Ref: React.Ref<HTMLParagraphElement>;
  user1Placeholder: string;
  user2Ref: React.Ref<HTMLParagraphElement>;
  user2Placeholder: string;
  btnText: string;
  hasReadonlyInput: boolean;
  options: { value: string; label: string }[];
}> = (props) => {
  const [user1, setUser1] = useState<string>('');
  const [user2, setUser2] = useState<string>('');

  return (

    <div className="form2container" id={props.id}>
      <div className="header2">
      <h1 className="title2">{props.title}</h1>
    </div>
      <div className="formBody">
        <form className="form" onSubmit={props.onSubmitHandler}>
          <div className="users">
          <p className="d-none"  ref={props.user1Ref}>
            {user1}
          </p>
          <p className="d-none"  ref={props.user2Ref}>
            {user2} 
          </p>

          <Row>
            <Row>
              <Form.Group className="mb-3" style={boxx}>
                <DropDown
                  options={props.options}
                  placeholder={props.user1Placeholder}
                  onSelection={(user: { value: string; label: string }) => {
                    if (props.options.includes(user)) setUser1(user.value);
                    else setUser1('');
                  }}
                />
              </Form.Group>
            </Row>
            <Row>
            {props.hasReadonlyInput && (
            <div className="readOnly">
              <InputGroup size="lg">
                <FormControl
                    type="text" placeholder=" is a friend of" readOnly
                  />
              </InputGroup>
              </div>
          )}
            </Row>
            <Row>
              <Form.Group  style={boxx}>
                <DropDown
                  options={props.options}
                  placeholder={props.user2Placeholder}
                  onSelection={(user: { value: string; label: string }) => {
                    if (props.options.includes(user)) setUser2(user.value);
                    else setUser2('');
                  }}
                />
              </Form.Group>
            </Row>
          </Row>
          </div>
          {/* {props.hasReadonlyInput && (
            <div className="readOnly">
              <InputGroup size="lg">
                <FormControl
                    type="text" placeholder="Friend" readOnly
                  />
              </InputGroup>
              </div>
          )} */}

          {/* button */}
          <Button
            size="lg"
            style={mystyle}
            type="submit"
            disabled={user1 === '' || user2 === '' || user1 === user2}
          >
            {props.btnText}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form2;
