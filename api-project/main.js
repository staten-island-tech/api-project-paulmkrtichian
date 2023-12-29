/*  const URL = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=09a4303b1ef760690190a1ab65d7eafc&hash=3a1cadafb0cb19882d6df0a72dda0f43&limit=100`;

async function getData(URL) {
  try {
    const response = await fetch(URL);

    console.log(response);
    const data = await response.json();
    console.log(data.data.results);
  } catch (error) {
    console.error(error);
  
  }
}

 getData(URL); */

/* function displayresults(data) {
  data.forEach((marvel) => {
    const marveltitles = marvel.title.map((comic) => comic.title);
    console.log(marveltitles)


  })
} 


/*https://gateway.marvel.com:443/v1/public/characters?apikey=09a4303b1ef760690190a1ab65d7eafc&hash=*/
/*https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1*/

//PUBLIC: 09a4303b1ef760690190a1ab65d7eafc
//Private: 02fdb37face372fee7c6e1cf85f2f2d451c89c3a
//Hash: 3a1cadafb0cb19882d6df0a72dda0f43
 

const URL = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=09a4303b1ef760690190a1ab65d7eafc&hash=3a1cadafb0cb19882d6df0a72dda0f43&limit=100`;

document.getElementById('search').addEventListener('click', () => {
  const searchTerm = document.getElementById('comicTitle').value;
  searchComicByTitle(URL, searchTerm);
});

async function searchComicByTitle(URL, searchTerm) {
  try {
    const response = await fetch(URL);
    const data = await response.json();

    
    const filteredComics = data.data.results.filter(comic =>
      comic.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    displayComics(filteredComics);
  } catch (error) {
    console.error(error);
  }
}

function displayComics(comics) {
  const appElement = document.getElementById('app');
  appElement.innerHTML = '';
  comics.forEach(comic => {
    const comicElement = document.createElement('div');
    comicElement.innerHTML = `
      <h3>${comic.title}</h3>
      <p>${comic.description}</p>
      <p>${comic.urls}
      <p>${comic.issueNumber}
      <hr />
    `;
    appElement.appendChild(comicElement);
  });
}

function displayComics(comics) {
  const appElement = document.getElementById('app');
  appElement.innerHTML = '';

  
  comics.forEach(comic => {
    const comicElement = document.createElement('div');
    comicElement.innerHTML = `
      <h3>${comic.title}</h3>
      <img src="${getComicImageSrc(comic)}" alt="${comic.title}" />
      
      <p> Issue Number : ${comic.issueNumber}
      <hr />
    `;
    appElement.appendChild(comicElement);
  });
}

function getComicImageSrc(comic) {
  return `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
}


