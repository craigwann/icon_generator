import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { ArtService } from './art';

$(document).ready(function() {

  $('#searchTerm').submit(function(event) {
    event.preventDefault();
    console.log("form submit");
    let input = $("#searchTerm").find('input[name=work]').val();
    $('#searchTerm').val("");
    let artService = new ArtService();
    console.log("art service " + ArtService);
    let promise = artService.getArtByInput(input);
    console.log(promise);
    // let request = new XMLHttpRequest();
    // let url = `https://www.rijksmuseum.nl/api/en/collection?q=${input}&key=${process.env.API_KEY}&format=json&imgonly=true`;
    // let getElements = function(response) {
    //   let array = response.artObjects
    //   let works = []
    //   for (var i = 0; i < array.length; i++) {
    //     $('#artwork').append("<img src=" + array[i].webImage.url + ">");
    //     }
    //   }
      promise.then(function(response) {
        console.log("response " + response );
       let body = JSON.parse(response);
       console.log("body" + body);
       let array = body.artObjects;
       console.log("craig");
       let works = [];
       for (var i = 0; i < array.length; i++) {
         console.log("here");
         $('#artwork').append("<img src=" + array[i].webImage.url + ">");
         }


      });

  });
});
// function(error) {
// $('.showErrors').text(`There was an error processing your request: ${error.message}`);
//  };



// promise.then(function(response) {
//   console.log("response " + response );
//  let body = JSON.parse(response);
//  console.log("body" + body);
//  let getElements = function(response) {
//    let array = response.artObjects;
//    let works = [];
//    for (var i = 0; i < array.length; i++) {
//      console.log("here");
//      $('#artwork').append("<img src=" + array[i].webImage.url + ">");
//    }
//  }
//
// });
