const URL = `http://gateway.marvel.com/?api_key=b9f7b4cb1ddfb5b3717d16ccf228274c`;
    async function getData(URL){
        try{
         const response = await fetch(URL);
       
        console.log(response);
        const data = await response.json();
         console.log(data.Results);
       
         } catch (error) {
        //   document.querySelector("h1").textContent = error;
        // }
    }
  }
   getData(URL); 
  