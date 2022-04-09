import React, { useContext, useState,useRef} from 'react';
import AppContext from '../../../store/appContext';
import Result from '../../result/Result';
import { Button, Form,Row } from 'react-bootstrap';
import DropDown from '../../ui/Dropdown';
import './separation.css'

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

const Separation: React.FC = () => {

  const appCtx = useContext(AppContext);
  const user1Ref = useRef<HTMLParagraphElement>(null);
  const user2Ref = useRef<HTMLParagraphElement>(null);
  const options = appCtx.users.map((user) => ({
    value: user.name,
    label: user.name,
  }));

  const findSeparationsHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      !user1Ref.current ||
      !user2Ref.current ||
      !user1Ref.current.textContent ||
      !user2Ref.current.textContent
    )
      return;
    appCtx.onSearch(user1Ref.current.textContent, user2Ref.current.textContent);
  };
  const [user1, setUser1] = useState<string>('');
  const [user2, setUser2] = useState<string>('');

  return (
    <div id="connection" className="wrap">
        <div className="sepContainer" id="Connection">
          <div className="headerS">
          <h1 className="titleS">Check Relationship among 2 People</h1>
        </div>
        <div className="formBodyS">
          <form className="form" onSubmit={findSeparationsHandler}>
            {/* persons */}
            <div className="usersS">
            <p className="d-none" ref={user1Ref}>
            {user1}
            </p>
            <p className="d-none" ref={user2Ref}>
              {user2}
            </p>

            <Row xs={2} md={4} >
              <div className="col-12 col-md-6">
                <Form.Group className="mb-3">
                  <DropDown
                    options={options}
                    placeholder="Person 1"
                    onSelection={(user: { value: string; label: string }) => {
                      if (options.includes(user)) setUser1(user.value);
                      else setUser1('');
                    }}
                  />
                </Form.Group>
              </div>
              <div className="col-12 col-md-6">
                <Form.Group className="mb-3">
                  <DropDown
                    options={options}
                    placeholder="Person 2"
                    onSelection={(user: { value: string; label: string }) => {
                      if (options.includes(user)) setUser2(user.value);
                      else setUser2('');
                    }}
                  />
                </Form.Group>
              </div>
            </Row>
            </div>
            

            {/* button */}
          <Button
            size="lg"
            style={mystyle}
            type="submit"
            disabled={user1 === '' || user2 === '' || user1 === user2}
          >
            Search
          </Button>
        </form>
      </div>
    </div>
          {/* <Form2
            id="connection"
            title=
            onSubmitHandler={findSeparationsHandler}
            user1Ref={user1Ref}
            user1Placeholder="Person 1"
            user2Ref={user2Ref}
            user2Placeholder="Person 2"
            btnText="Search"
            hasReadonlyInput={false}
            options={options}
      /> */}
      {appCtx.hasOutput && (
        <div className="resultClass">
                <Result />
        </div>
            )}
    </div>
  );
};

export default Separation;
