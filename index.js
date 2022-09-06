// Add your code here
//submitData, that takes two strings as arguments, 
//one representing a user's name and the other representing a user's email.
//CRUD
//Create - POST request
//Read - GET request
//Update 
//Delete


function submitData (userName, userEmail) {
    const formData = {
        name: userName,
        email: userEmail,
      };
     
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      };

        return fetch("http://localhost:3000/users",  configurationObject)
        .then(function (response) {
        return response.json();
        })
        .then(function (object) {
        document.body.append =  object["id"]
        //appending the id to the DOM/html
        })
        .catch(function (error) {
          document.body.append = error.message
          //appending a message to the DOM when catch is called.
        });

}





// const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh" // CityBike Data from data.gov
// const data = fetch(url)

// console.log(data) // Promise {<pending>} 

//pulling the fetched url, and console logging the promise

// const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh" // CityBike Data from data.gov
// fetch(url).then(console.log)


// const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh" // CityBike Data from data.gov
// fetch(url).then(console.log)
// Response {type: "cors", url: "https://data.cityofnewyork.us/api/views/p94q-8hxh", redirected: false, status: 200, ok: true, …} 



// const url = "https://data.cityofnewyork.us/api/views/p94q-8hxh" // CityBike Data from data.gov
// fetch(url)
//   .then(function(response){
//     return response.json()
//   }).then(console.log)
// {id: "p94q-8hxh", name: "Citi Bike Live Station Feed (JSON)", attribution: "CitiBike", attributionLink: "http://citibikenyc.com/stations/json", averageRating: 0, …}``` 
//we are grabbing the URL, and taking the data, to return to the URL

