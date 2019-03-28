//Make API call and display Information//s
export class Doc {
  findAil(keyword){
   return new Promise(function(resolve, reject){
     const request = new XMLHttpRequest();
     const apiKey = process.env.exports.apiKey; //api key variable
     const url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${keyword}&location=45.5155%2C-122.6793%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`
     request.onload = function() {
          if (this.status === 200) {
            resolve(request.response)
          } else {
            reject(Error(request.Statustext))
          }
        }
      request.open("GET", url, true);
      request.send();
    });
  }
}

export class FoundDoc {
  constructor (name, address, phone,accepting, haveSite) {
        this.name = name;
        this.address = address;
        this.phone = phone
        this.accepting = accepting;
        this.haveSite = haveSite
        }
        HTML(){
         return '<div class=newDoctor>'+
                    '<p> Doctors name: ' + this.name + '</p>'+
                    '<p class=\'info\'> Address: ' + this.address + '</p>'+
                    '<p class=\'info\'> Phone Number: ' + this.phone + '</p>'+
                    '<p class=\'info\'> New Patients: ' + this.accepting + '</p>'+
                    '<p class=\'info\'> Website: ' + this.haveSite + '</p>'+
                '</div>';
 }

    }
