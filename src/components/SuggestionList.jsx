import React, { Component } from "react";

class SuggestionList extends Component {
  render() {
    const { suggestions, userInput, onClick, type } = this.props;
    return (
      <ul className={`autocomplete-suggestions ${type}`}>
        {suggestions.map((suggestion) => {
          var regex = new RegExp(userInput, "gi");
          const suggestionString = suggestion.replace(
            regex,
            (str) => `<>${str}<>`
          );
          return (
            <li key={suggestion} onClick={onClick}>
              {suggestionString.split("<>").map((el, index) => {
                if (el.toLowerCase() === userInput.toLowerCase()) {
                  return <b key={`${el}-${index}`}>{el}</b>;
                }
                return el;
              })}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default SuggestionList;
