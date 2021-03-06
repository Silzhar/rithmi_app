# Angular Sesión 4 - Ejercicios

Vamos a realizar una Pokedex!

Dispones de la API de pokemons ofrecida por [https://pokeapi.co](https://pokeapi.co/)

Haciendo uso de servicios de angular, httpclient, observables y componentes haz una petición que recupere una lista de pokemons ([https://pokeapi.co/api/v2/pokemon/](https://pokeapi.co/api/v2/pokemon/)) y los pinte en pantalla.

La respuesta de la petición tiene la siguiente estructura:

```jsx
{
    "count": 964,
    "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
    "previous": null,
    "results": [
        {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
        },
        {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon/3/"
        },
        {
            "name": "charmander",
            "url": "https://pokeapi.co/api/v2/pokemon/4/"
        },
        {
            "name": "charmeleon",
            "url": "https://pokeapi.co/api/v2/pokemon/5/"
        }
    ]
}
```

Como puedes observar, dentro de la propiedad results, encontrarás un listado de Pokemons. Por desgracia solo podrás ver su nombre. El resto de propiedades del pokemon podrás consultarlos en su URL, haciendo una nueva petición. Por ejemplo para Venasur tendrás que hacer una petición a [https://pokeapi.co/api/v2/pokemon/3](https://pokeapi.co/api/v2/pokemon/3)

Haz que al clicar en el nombre de un pokemon, te pinte sus detalles en la parte de la derecha. Verás que hay muchos datos… basta con que pintes su imagen, su nombre, su peso y su altura.

NOTA: la imagen está en sprites -> front_default

Dentro del proyecto encontrarás una aplicación de Angular vacía sobre la cual empezar a realizar tus desarrolos. Recuerda que deberás realizar un servicio, interfaces para los datos, un componente para visualizar un Pokemon.. etc

Mucho ánimo!

### BONUS

Cuando recibas la respuesta de la petición de pokemons, realiza una petición extra para cada uno de ellos, de manera que obtengas toda la información de los pokemons para poder pintarla en la pantalla inicial de la siguiente forma:

![assets/pokemon.gif](assets/pokemon.gif)