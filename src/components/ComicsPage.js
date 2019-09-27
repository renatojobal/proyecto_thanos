import React from "react";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.css";

import ComicList from "./ComicList";

class ComicsPage extends React.Component {
  state = {
    loading: true,
    error: null,
    comics: undefined
  };

  componentDidMount() {
    // Aqui se debe llenar la variable 'comics' con un array
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    // Limpiamos el proceso asincorno que se estaba realizando 
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const comics = []; // ! Justo aqui se debe llamar a la api
      this.setState({ loading: false, comics: comics });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.loading) {
      // * Renderizar el componente loading
      return <div>Loading...</div>;
    } else if (this.error) {
      // * Renderizar un mensaje o componente de error
      return <div>Error</div>;
    } else {
      // * Cargar el componente de ComicList normalmente
      return (
        <div>
          <Navbar />
          <ComicList comics={this.comics} />
        </div>
      );
    }
  }
}


export default ComicsPage;
