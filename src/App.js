import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { addRecipe } from "./actions";

class App extends Component {
  state = {
    calendar: null
  };

  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      this.setState(() => ({
        calendar: store.getState()
      }));
    });

    this.input.value = "";
  }

  submitFood = () => {
    this.props.store.dispatch(
      addRecipe({
        day: "monday",
        meal: "breakfast",
        recipe: { label: this.input.value }
      })
    );
    console.log(this.input.value);
    this.input.value = "";
  };
  render() {
    console.log(this.state.calendar);
    return (
      <div>
        <input
          type="text"
          ref={input => (this.input = input)}
          placeholder="Monday's Breakfast"
        />
        <button onClick={this.submitFood}>Submit</button>

        <pre>
          Monady's Breakfast:{" "}
          {this.state.calendar && this.state.calendar.monday.breakfast}
        </pre>
      </div>
    );
  }
}

export default App;
