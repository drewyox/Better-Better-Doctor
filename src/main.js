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
        const accepts = element.practices[0].accepts_new_patients;
        const accepting = (accepts) ? "They are accepting new patients." : "They are not recieving new patients."
        const phone = element.practices[0].phones[0].number;
        const website = element.practices[0].website;
        const haveSite = (website) ? website : "No website available";
        console.log(phone);
        console.log(name);
        console.log(address);
        console.log(accepting);
        console.log(haveSite);
        // let yourDoctor = new FoundDoc()

      })
    })
  });
})
