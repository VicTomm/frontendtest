import pokemon from "../data";

export default class Services {
  static getPokemonSuggestions = (value) => {
    console.log(value);
    const filteredPokemons = pokemon.filter((name) =>
      name.toLowerCase().includes(value.toLowerCase())
    );

    return new Promise((onSuccess, onError) => {
      setTimeout(() => {
        onSuccess(filteredPokemons);
      }, 500);
    });
  };

  static getCountries = (value) => {
    return fetch(`https://restcountries.eu/rest/v2/name/${value}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.length > 0) {
          const countries = json.map((el) => el.name);
          const filteredNames = countries.filter((name) =>
            name.toLowerCase().includes(value.toLowerCase())
          );
          return filteredNames;
        } else {
          return [];
        }
      });
  };
}
