//Take User Form Information//

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import {Doc} from './backend.js';

$("document").ready(function(){
  $("#issueSearch").submit(function(event){
    event.preventDefault();
    let keyword = $("#symptoms").val();

    let docbyAil = new Doc();
    let promise = docbyAil.findAil(keyword);

    promise.then(function(response){
      let body = JSON.parse(response);
      body.data.forEach(function(element) {
        const name = element.profile.first_name + " " + element.profile.last_name;
        const address = element.practices[0].visit_address.city + " " + element.practices[0].visit_address.state + " " + element.practices[0].visit_address.street;
        console.log(name);
        console.log(address);
      })
    })
  });
})
