import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Container extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    currentUserUid: PropTypes.string
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar className="main-nav">
          <LinkContainer to="/">
            <Navbar.Brand>Grocery</Navbar.Brand>
          </LinkContainer>
          <Nav>
            <LinkContainer to="/" onlyActiveOnIndex>
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            {
              this.props.currentUserUid === 'none' ?
              <LinkContainer to="/account">
                <NavItem eventKey={2}>Sign In</NavItem>
              </LinkContainer>
              :
              <LinkContainer to="/account">
                <NavItem eventKey={2}>Sign Out</NavItem>
              </LinkContainer>
            }

          </Nav>
        </Navbar>

        <Grid className="content">
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

export default connect(({ auth }) => ({
  currentUserUid: auth.getIn(['user', 'attributes', 'provider']) || 'none',
}))(Container);
