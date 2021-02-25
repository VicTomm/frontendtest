import React, { Component } from "react";
import Services from "../services";
import SuggestionList from "./SuggestionList";
import "./style.css";

class Autocomplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      userInput: "",
      showDropdown: false,
    };
  }

  handleInputChange = async (e) => {
    const userInput = e.target.value;
    this.setState({
      userInput,
    });
    const suggestions = await Services.getPokemonSuggestions(userInput);
    this.setState({
      suggestions,
      showDropdown: true,
    });

    if (userInput === "") {
      this.setState({
        showDropdown: false,
      });
    }
  };

  handleSuggestionClick = (e) => {
    const selectedSuggestion = e.target.innerText;
    this.setState({
      userInput: selectedSuggestion,
      showDropdown: false,
    });
  };

  render() {
    const { suggestions, showDropdown, userInput } = this.state;

    return (
      <div className="autocomplete-container">
        <h3>Which Pokemon are you looking for?</h3>
        <h4>AutoComplete Class Component</h4>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={userInput}
          className="autocomplete-input"
        />
        {showDropdown && (
          <SuggestionList
            suggestions={suggestions}
            userInput={userInput}
            onClick={this.handleSuggestionClick}
          />
        )}
      </div>
    );
  }
}

export default Autocomplete;
