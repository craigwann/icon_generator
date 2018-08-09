
export class ArtService{
  getArtByInput(input){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://www.rijksmuseum.nl/api/en/collection?q=${input}&key=${process.env.API_KEY}&format=json&imgonly=true`;
      request.onload = function() {
        if (this.status === 200) {
         resolve(request.response);
       } else {
         reject(Error(request.statusText));
       }
      }
      request.open("GET", url, true);
      request.send();
    })
  }
}
