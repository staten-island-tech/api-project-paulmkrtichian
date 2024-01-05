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

/* 


/*https://gateway.marvel.com:443/v1/public/characters?apikey=09a4303b1ef760690190a1ab65d7eafc&hash=*/
/*https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1*/

//PUBLIC: 09a4303b1ef760690190a1ab65d7eafc
//Private: 02fdb37face372fee7c6e1cf85f2f2d451c89c3a
//Hash: 3a1cadafb0cb19882d6df0a72dda0f43

const URL =
  "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=09a4303b1ef760690190a1ab65d7eafc&hash=3a1cadafb0cb19882d6df0a72dda0f43&limit=100";
const appElement = document.getElementById("app");

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.data.results;
  } catch (error) {
    console.error(error);
  }
}

/*function putcomics(comics) {
  appElement.innerHTML = '';
  comics.forEach(comic => {
    const comicElement = document.createElement('div');
    comicElement.className = 'comic-box';
    comicElement.innerHTML = `
      <h2>${comic.title}</h2>
      <img src="${getComicImageSrc(comic)}" alt="comic"/>
      <p>Description: ${getdescription(comic)}</p>
      <p>Issue Number: ${comic.issueNumber}</p>
      <p>Price: ${pprices(comic)}</p>
      <hr />
    `;
    appElement.appendChild(comicElement);
  });
}*/
function putcomics(comics) {
  appElement.innerHTML = "";
  comics.forEach((comic, index) => {
    const comicElement = document.createElement("div");
    comicElement.className = "comic-box";
    comicElement.innerHTML = `
      <h2>${comic.title}</h2>
      <img src="${getimage(comic)}" alt="Comic Image ${index + 1}" />
      <p>Description: ${getdescription(comic)}</p>
      <p>Issue Number: ${comic.issueNumber}</p>
      <p>Price: ${pprices(comic)}</p>
      <hr />  `; //break
    appElement.appendChild(comicElement);
  });
}
//In this function, a div is created, in which the comic cards will be displayed in. I used index + 1 due to the WAVE alerts. It said that the images had the same alt, and I fixed it, so that the alts for the images would be different.

function getimage(comic) {
  return `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
}
//thumbnail.path amd thumbnail.extension is a part of the API. This function creats the image for each comic.

function pprices(comic) {
  const price =
    comic.prices && comic.prices.length > 0 ? comic.prices[0].price : 0;
  return price === 0 ? "Not available" : `${price}$`; //If price is 0, "Not Avaible" will be displayed in the price section
}

function getdescription(comic) {
  return comic.description || "No description available";
}
// || means or ^^^^

document.getElementById("search").addEventListener("click", async () => {
  const search = document.getElementById("comicTitle").value.toLowerCase();
  const comics = await getData(URL);
  const filteredComics = comics.filter((comic) =>
    comic.title.toLowerCase().includes(search)
  );
  putcomics(filteredComics);
});
//When inputting the data, lower case letters will work too, increasing accessbility

document.addEventListener("DOMContentLoaded", async () => {
  const allComics = await getData(URL);
  putcomics(allComics);
});
// The lines above will display all 100 cards in the beginning before the filter.
