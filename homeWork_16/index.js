// 

fetch("https://swapi.dev/api/people/")
    .then(response => response.json())

    .then(resp => { 
        const result = resp.results.map(item => {
          return {
            name: item.name,
            mass: item.mass,
            gender: item.gender,
            height: item.height,
            films: item.films
          }
        });
        return result;
      })

      .then(result => {
        const popular = result.filter(item => item.films.length > 3);
        console.log(popular);
      })