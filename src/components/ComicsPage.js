import React from "react";
import Navbar from "./Navbar";
import Loading from "./Loading";
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
       "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=7a0963902eb142154809d5cc40c93339&hash=c229dbb1995825313cb754f16b2ca602"
     );
     const prevData = await response.json();
     const results = await prevData.data.results;
     // * Agregamos todos los datos en un array de objetos json
     let comics = []
     results.map((result) => (
       comics.push({imageURL: result.thumbnail.path+"."+result.thumbnail.extension, description: result.description})
     ));
     // * GUardamos los datos en el estad del componente
     this.setState({
       loading: false,
       comics: comics
     });
   } catch (error) {
     this.setState({ loading: false, error: error });
   }
 };
 render() {
   if (this.state.loading) {
     // * Renderizar el componente loading
     return (<Loading/>);
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