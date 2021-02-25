import React, { useState } from "react";
import "./style.css";
import SuggestionList from "./SuggestionList";
import Services from "../services";

const FunctionalAutocomplete = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [userInput, setUserInput] = useState("");

  return (
    <div className="autocomplete-container">
      <h2>Search for a country</h2>
      <h3>Functional Component</h3>
      <input
        type="text"
        onChange={async (e) => {
          const userInput = e.target.value;
          setUserInput(userInput);
          if (e.target.value) {
            const countries = await Services.getCountries(userInput);
            setSuggestions(countries);
            if (userInput === "") {
              setShowDropdown(false);
            } else {
              setShowDropdown(true);
            }
          }
        }}
        value={userInput}
        className="autocomplete-input countries"
      />
      {showDropdown && userInput !== "" && (
        <SuggestionList
          suggestions={suggestions}
          userInput={userInput}
          onClick={(e) => {
            setUserInput(e.target.innerText);
            setSuggestions([]);
            setShowDropdown(false);
          }}
          type="countries"
        />
      )}
    </div>
  );
};

export default FunctionalAutocomplete;
