import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// import { ArtService } from './art';

$(document).ready(function() {

  // let input = $("#iconName").find('input[name=icon]').val();


    let request = new XMLHttpRequest();
    // let url = `https://www.rijksmuseum.nl/api/en/collection?key=${process.env.API_KEY}&format=json&type=schilderij&f.normalized32Colors.hex=%20%23367614`
    // let url = `http://api.giphy.com/v1/gifs/search?api_key=qwCP7BLZ5HMzmejAQLmGB0REUMKUK5b1&q=${petName}`;
    let url = `https://www.rijksmuseum.nl/api/nl/collection?q=rembrandt&key=${process.env.API_KEY}&format=json`;
    let getElements = function(response) {

      let randomNumber = Math.floor(Math.random() * 25);
      var icon = response.artObjects[randomNumber];
      // document.getElementById('creature_gif').innerHTML = "<img src=" + icon + ">";
    }

    request.onreadystatechange = function() {

      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        console.log(JSON.parse(this.response));
        // console.log(response);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();


});
