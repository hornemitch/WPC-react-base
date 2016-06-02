import React from 'react';
import { Grid } from 'react-bootstrap';
import AppNavigation from '../containers/app-navigation';
import { Parallax } from 'react-parallax';

export const App = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
  },
  render() {
    return <div>
      <AppNavigation />
      <div>
        { this.props.children }
      </div>
    </div>;
  },
});
