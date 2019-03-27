//Make API call and display Information//s
export class Doc {
  findAil(keyword){
   return new Promise(function(resolve, reject){
     const request = new XMLHttpRequest();
     const apiKey = process.env.exports.apiKey; //api key variable
     const url = `https://api.betterdoctor.com/2016-03-01/doctors?&query=${keyword}location=45.5122%2C-122.6587%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${apiKey}`
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
