//Make API call and display Information//s
export class Doc {

 const apiKey = process.env.exports.apiKey; //api key variable
 let request = new XMLHttpRequest();
 const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${firstName}%20${lastName}%20&query=${keyword}location=45.5122%2C-122.6587%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`
 request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();


}
