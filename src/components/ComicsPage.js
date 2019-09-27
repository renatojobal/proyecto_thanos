import React from "react";
import Navbar from "./Navbar";

<<<<<<< HEAD
=======
import Loading from "./Loading";


>>>>>>> origin/development
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
      fetch(
        "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=7a0963902eb142154809d5cc40c93339&hash=c229dbb1995825313cb754f16b2ca602"
      )
        .then(response => response.json())
        .then(comicJson =>
          this.setState({ comics: comicJson.data.results, loading: false })
        );

      const comicsMap = this.state.comics;
      const comics = [];

      comicsMap.map(comic =>
        comics.push({
          imageURL: comic.thumbnail.path + "." + comic.thumbnail.extension,
          description: comic.description
        })
      );

      this.setState({
        loading: false,
        comics: comics
      });

    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
<<<<<<< HEAD
    if (!this.state.loading) {
      // * Renderizar el componente loading
      return <div>Loading...</div>;
=======
    if (this.state.loading) {
      // * Renderizar el componente loading
      return (<Loading/>);
>>>>>>> origin/development
    } else if (this.state.error) {
      // * Renderizar un mensaje o componente de error
      return <div>Error</div>;
    } else {
      // * Cargar el componente de ComicList normalmente
      return (
        <div>
          <Navbar />
          <ComicList comics={this.state.comics} />
        </div>
      );
    }
  }
}

export default ComicsPage;
