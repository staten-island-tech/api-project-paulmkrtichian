const URL = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=09a4303b1ef760690190a1ab65d7eafc&hash=3a1cadafb0cb19882d6df0a72dda0f43&limit=100`;

async function getData(URL) {
  try {
    const response = await fetch(URL);

    console.log(response);
    const data = await response.json();
    console.log(data.data.results);
  } catch (error) {
    console.error(error);
    // Handle the error, for example, update an element with an error message:
    // document.querySelector("h1").textContent = error.message;
  }
}

getData(URL);


/*https://gateway.marvel.com:443/v1/public/characters?apikey=09a4303b1ef760690190a1ab65d7eafc&hash=*/
/*https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1*/

//PUBLIC: 09a4303b1ef760690190a1ab65d7eafc
//Private: 02fdb37face372fee7c6e1cf85f2f2d451c89c3a
//Hash: 3a1cadafb0cb19882d6df0a72dda0f43