import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// import { ArtService } from './art';

$(document).ready(function() {

  $('#searchTerm').submit(function(event) {
    event.preventDefault();



  let input = $("#searchTerm").find('input[name=work]').val();
console.log(input);

    let request = new XMLHttpRequest();
    let url = `https://www.rijksmuseum.nl/api/nl/collection?q=rembrandt&key=${process.env.API_KEY}&format=json`;
    let getElements = function(response) {

      // let randomNumber = Math.floor(Math.random() * 25);

      var art = response.artObjects[2].webImage.url;
      // $(".artwork").innerHTML = "<li>" + art + "</li>";
      console.log("the " + art);
      document.getElementById('artwork').innerHTML = "<img src=" + art + ">"
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
});
