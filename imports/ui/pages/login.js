import React from 'react';
import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { handleLogin } from '../../modules/login';
import { Parallax } from 'react-parallax';

export class Login extends React.Component {
  componentDidMount() {
    handleLogin({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <Row>
      <Col xs={ 12 } sm={ 6 } md={ 4 } >
        <div>
          <h4 className="page-header">Login</h4>
          <form ref="login" className="login" onSubmit={ this.handleSubmit }>
            <FormGroup>
              <ControlLabel>Email Address</ControlLabel>
              <FormControl
                type="email"
                ref="emailAddress"
                name="emailAddress"
                placeholder="Email Address"
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>
                <span className="pull-left">Password</span>
                <Link className="pull-right" to="/recover-password">Forgot Password?</Link>
              </ControlLabel>
              <FormControl
                type="password"
                ref="password"
                name="password"
                placeholder="Password"
              />
            </FormGroup>
            <Button type="submit" bsStyle="success">Login</Button>
          </form>
        </div>
        <Parallax className="parallax" bgImage="/static_assets/images/fotolia_1603770.jpg" strength={100}>
        </Parallax>
        <div className="full-div black-div">
          <img src="/static_assets/images/fotolia_1603770.jpg" alt=""/>
        </div>
      </Col>
    </Row>;
  }
}
