import React from "react";
import ComicContainer from "../src/components/ComicContainer";
import ComicList from "../src/components/ComicList";
import ComicsPage from "../src/components/ComicsPage";
import "bootstrap/dist/css/bootstrap.css";

export default {
  title: "Comic"
};


export const comicContainer = () => {
  return (
    <ComicContainer
      imageURL="https://imgc.allpostersimages.com/img/print/posters/marvel-comics-retro-the-x-men-comic-book-cover-no-100-professor-x_a-G-13758639-13198931.jpg?w=632&h=948"
      description="Los X-Men, también conocidos como Patrulla-X en España1​ y Hombres X en Hispanoamérica, son un equipo de superhéroes ficticios que aparecen en los cómics estadounidenses publicados por Marvel Comics. Creado por el artista / coautor Jack Kirby y el escritor Stan Lee, los personajes aparecieron por primera vez en The X-Men # 1 (septiembre de 1963)2​y formaron una de las franquicias más reconocidas y exitosas de Marvel Comics, apareciendo en numerosos libros y programas de televisión, películas y videojuegos. El éxito de esta franquicia es tan enorme que la segunda colección de los mutantes, cuya andadura comenzó en 1991 bajo el título de X-Men (obviando The Uncanny delante del nombre) se convirtió en el cómic más vendido de todos los tiempos, y un spin-off titulado X-Force en el segundo cómic con mayores ventas."
    />
  );
};


export const comicList = () => {
  const comics = [
    {
      imageURL:
        "https://imgc.allpostersimages.com/img/print/posters/marvel-comics-retro-the-x-men-comic-book-cover-no-100-professor-x_a-G-13758639-13198931.jpg?w=632&h=948",
      description:
        "Los X-Men, también conocidos como Patrulla-X en España1​ y Hombres X en Hispanoamérica, son un equipo de superhéroes ficticios que aparecen en los cómics estadounidenses publicados por Marvel Comics. Creado por el artista / coautor Jack Kirby y el escritor Stan Lee, los personajes aparecieron por primera vez en The X-Men # 1 (septiembre de 1963)2​y formaron una de las franquicias más reconocidas y exitosas de Marvel Comics, apareciendo en numerosos libros y programas de televisión, películas y videojuegos. El éxito de esta franquicia es tan enorme que la segunda colección de los mutantes, cuya andadura comenzó en 1991 bajo el título de X-Men (obviando The Uncanny delante del nombre) se convirtió en el cómic más vendido de todos los tiempos, y un spin-off titulado X-Force en el segundo cómic con mayores ventas."
    },
    {
      imageURL:
        "https://imgc.allpostersimages.com/img/print/posters/marvel-comics-retro-the-x-men-comic-book-cover-no-100-professor-x_a-G-13758639-13198931.jpg?w=632&h=948",
      description:
        "Los X-Men, también conocidos como Patrulla-X en España1​ y Hombres X en Hispanoamérica, son un equipo de superhéroes ficticios que aparecen en los cómics estadounidenses publicados por Marvel Comics. Creado por el artista / coautor Jack Kirby y el escritor Stan Lee, los personajes aparecieron por primera vez en The X-Men # 1 (septiembre de 1963)2​y formaron una de las franquicias más reconocidas y exitosas de Marvel Comics, apareciendo en numerosos libros y programas de televisión, películas y videojuegos. El éxito de esta franquicia es tan enorme que la segunda colección de los mutantes, cuya andadura comenzó en 1991 bajo el título de X-Men (obviando The Uncanny delante del nombre) se convirtió en el cómic más vendido de todos los tiempos, y un spin-off titulado X-Force en el segundo cómic con mayores ventas."
    },
    {
      imageURL:
        "https://imgc.allpostersimages.com/img/print/posters/marvel-comics-retro-the-x-men-comic-book-cover-no-100-professor-x_a-G-13758639-13198931.jpg?w=632&h=948",
      description:
        "Los X-Men, también conocidos como Patrulla-X en España1​ y Hombres X en Hispanoamérica, son un equipo de superhéroes ficticios que aparecen en los cómics estadounidenses publicados por Marvel Comics. Creado por el artista / coautor Jack Kirby y el escritor Stan Lee, los personajes aparecieron por primera vez en The X-Men # 1 (septiembre de 1963)2​y formaron una de las franquicias más reconocidas y exitosas de Marvel Comics, apareciendo en numerosos libros y programas de televisión, películas y videojuegos. El éxito de esta franquicia es tan enorme que la segunda colección de los mutantes, cuya andadura comenzó en 1991 bajo el título de X-Men (obviando The Uncanny delante del nombre) se convirtió en el cómic más vendido de todos los tiempos, y un spin-off titulado X-Force en el segundo cómic con mayores ventas."
    },
    {
      imageURL:
        "https://imgc.allpostersimages.com/img/print/posters/marvel-comics-retro-the-x-men-comic-book-cover-no-100-professor-x_a-G-13758639-13198931.jpg?w=632&h=948",
      description:
        "Los X-Men, también conocidos como Patrulla-X en España1​ y Hombres X en Hispanoamérica, son un equipo de superhéroes ficticios que aparecen en los cómics estadounidenses publicados por Marvel Comics. Creado por el artista / coautor Jack Kirby y el escritor Stan Lee, los personajes aparecieron por primera vez en The X-Men # 1 (septiembre de 1963)2​y formaron una de las franquicias más reconocidas y exitosas de Marvel Comics, apareciendo en numerosos libros y programas de televisión, películas y videojuegos. El éxito de esta franquicia es tan enorme que la segunda colección de los mutantes, cuya andadura comenzó en 1991 bajo el título de X-Men (obviando The Uncanny delante del nombre) se convirtió en el cómic más vendido de todos los tiempos, y un spin-off titulado X-Force en el segundo cómic con mayores ventas."
    }
  ];

  return <ComicList comicList={comics} />;
};

