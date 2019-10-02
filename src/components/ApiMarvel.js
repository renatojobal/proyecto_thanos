import React from 'react';
import Comic from './Character';

class ApiMarvel {

       comics = [];
       isFetch = true;
   }
   componentDidMount(){
       fetch('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=7a0963902eb142154809d5cc40c93339&hash=c229dbb1995825313cb754f16b2ca602')
       .then(response=> response.json())
       .then(comicJson => this.setState({comics: comicJson.data.results, isFetch: false}))
   }
   render(){
       const {isFetch, comics} = this.state;
       if(isFetch){
           return 'Loading...';
       }
       return (
           comics.map((comic)=> <Comic name={comic.name} imageURL={comic.thumbnail.path + '.' + comic.thumbnail.extension} description={comic.description}/>)
       )
   }
}

export default ComicContainer;