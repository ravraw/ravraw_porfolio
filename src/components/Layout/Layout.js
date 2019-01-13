import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
