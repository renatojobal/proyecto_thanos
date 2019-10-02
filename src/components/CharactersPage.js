import React from "react";
import Navbar from "./Navbar";
import Loading from "./Loading";
import CharacterList from "./CharacterList";

class CharactersPage extends React.Component {

  state = {
    loading: true,
    error: null,
    characters: undefined
  };
  componentDidMount() {
    // Aqui se debe llenar la variable 'comics' con un array
    this.fetchData();
    // this.intervalId = setInterval(this.fetchData, 5000);
  }

  // componentWillUnmount() {
  //   Limpiamos el proceso asincorno que se estaba realizando
  //   clearInterval(this.intervalId);
  // }

  // * Función asíncrona para cargar los datos
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      // * Llamamos a la api
      const response = await fetch(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=7a0963902eb142154809d5cc40c93339&hash=c229dbb1995825313cb754f16b2ca602"
      );
      const prevData = await response.json();
      const results = await prevData.data.results;

      // * Agregamos todos los datos en un array de objetos json
      let characters = [];
      results.map((result) =>
        characters.push({
          imageURL: result.thumbnail.path + "." + result.thumbnail.extension,
          description: result.description
        })
      );

      // * Guardamos los datos en el estad del componente
      this.setState({
        loading: false,
        characters: characters
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      // * Renderizar el componente loading
      return <Loading />;
    } else if (this.state.error) {
      // * Renderizar un mensaje o componente de error
      return <div>Error</div>;
    } else {
      // * Cargar el componente de ComicList normalmente
      return (
        <div>
          <Navbar />
          <CharacterList characters={this.state.characters} />
        </div>
      );
    }
  }
}

export default CharactersPage;