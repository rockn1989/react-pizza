import React, { useEffect, useState, Component } from "react";
import axios from "axios";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { setPizzas as setPizzasAction } from "./redux/actions/pizza";

/* const App = () => {
  useEffect(() => {
    axios.get(`http://localhost:3000/db.json`).then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route
          path="/"
          exact
          render={() => {
            return <Home items={pizzas} />;
          }}
        />
        <Route path="/cart" exact component={Cart} />
      </div>
    </div>
  );
}; */

class App extends Component {
  componentDidMount() {
    axios.get(`http://localhost:3000/db.json`).then(({ data }) => {
      window.store.dispatch(setPizzasAction(data.pizzas));
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route
            path="/"
            exact
            render={() => {
              return <Home items={this.props.items} />;
            }}
          />
          <Route path="/cart" exact component={Cart} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
