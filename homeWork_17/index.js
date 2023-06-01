const fetchFilm = (filmId) => {
    return fetch(`https://swapi.dev/api/films/${filmId}/`).then((response) =>
      response.json()
    );
  };
  
  const fetchPlanet = (url) => {
    return fetch(url).then((response) => response.json());
  };
  
  const filmIds = [1, 2, 3];
  const filmPromises = filmIds.map((filmId) => fetchFilm(filmId));

  console.log(filmPromises);
  
  Promise.all(filmPromises)
    .then((films) => { 
      console.log(films);
      const planetUrls = films.flatMap((film) => film.planets);
      const planetPromises = planetUrls.map((url) => fetchPlanet(url));
  
      return Promise.all(planetPromises);
    })
    .then((planets) => {
      planets.forEach(({ name }) => console.log(name));
    });