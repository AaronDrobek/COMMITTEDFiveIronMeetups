const users =
    {"results":[{
        "gender":"male",
        "name":{
            "title":"mr",
            "first":"curtis",
            "last":"ryan"
        },
        "location":{
            "street":"8073 rolling green rd",
            "city":"south valley","state":"missouri",
            "postcode":99356
        },
        "email":"curtis.ryan@example.com",
        "login":{
            "username":"beautifulmouse544",
            "password":"beardog",
            "salt":"kL9djbKk","md5":"67bedf8307958366eb547d6bc8f23a9a",
            "sha1":"33f493d4301964dff559850470758e8f4fa78c13",
            "sha256":"4a9e0d3fd2cafc6f6a1fc05cd6b35ceb0cfe08fa2b9abc07f3bfad5c977be86c"
        },
        "dob":"1967-10-29 09:16:09",
        "registered":"2007-01-12 19:26:30",
        "phone":"(518)-664-5821",
        "cell":"(385)-917-9080",
        "eventsClicked" : ["19671029298637","19671029091609"],
        "picture":{
            "large":"https://randomuser.me/api/portraits/men/0.jpg",
            "medium":"https://randomuser.me/api/portraits/med/men/0.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/men/0.jpg"},
            "nat":"US"
        },

        {
            "gender":"female",
            "name":{
                "title":"ms",
                "first":"mila",
                "last":"kunis"
            },
            "location":{
                "street":"373 cherokee dr",
                "city":"orange county","state":"california",
                "postcode":93056
            },
            "email":"kunis.mila@example.com",
            "login":{
                "username":"milakunis",
                "password":"bloop",
                "salt":"kL9orbKk","md5":"67bedf307958366eb547d6bc8f23b4b",
                "sha1":"33f493d4301964dff559850470758e8f4fa78d02",
                "sha256":"4a9e0d3fd2cafc6f6a1fc05cd6b35ceb0cfe08fa2b9abc07f3bfad5c977be03h"
            },
            "dob":"1967-10-22 03:16:09",
            "registered":"2007-05-12 13:26:30",
            "phone":"(518)-664-5781",
            "cell":"(385)-917-5920",
            "eventsClicked" : ["19671029091609"],
            "picture":{
                "large":"https://randomuser.me/api/portraits/men/0.jpg",
                "medium":"https://randomuser.me/api/portraits/med/men/0.jpg",
                "thumbnail":"https://randomuser.me/api/portraits/thumb/men/0.jpg"},
                "nat":"US"
            },
]}

<<<<<<< HEAD
const events =
    {"results":[{
        "title":"TIY Graduation",
        "location":{
            "street":"115 MLK JR Drive",
            "city":"Atlanta","state":"georgia",
            "postcode":30303
        },
        "date":{
            "time":1500,
            "dayofweek":"friday",
            "month":"october",
            "date":"6",
            "year":"2017",
            "timezone":"EST"
        },
        "rsvp_code":"19671029091609",
        "time_registered":"2007-01-12 19:26:30",
        "phone":"(518)-664-5821",
        "cell":"(385)-917-9080",
        "organizer_info":{
            "name":"ryan curtis",
            "email":"curtis.ryan@example.com"
        },
        "event_picture":{
            "large":"https://randomuser.me/api/portraits/men/0.jpg",
            "medium":"https://randomuser.me/api/portraits/med/men/0.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/men/0.jpg"},
            "nat":"US"
        },
    {
        "title":"Labor Day Beach Partay",
        "location":{
            "street":"333 peachtree street",
            "city":"Atlanta","state":"georgia",
            "postcode":30303
        },
        "date":{
            "time":1100,
            "dayofweek":"friday",
            "month":"september",
            "date":"7",
            "year":"2017",
            "timezone":"EST"
        },
        "rsvp_code":"19671029298637",
        "time_registered":"2017-06-12 14:26:30",
        "phone":"(917)-264-5311",
        "cell":"(305)-297-3980",
        "organizer_info":{
            "name":"bob lee",
            "email":"bob.lee@example.com"
        },
        "event_picture":{
            "large":"https://randomuser.me/api/portraits/men/0.jpg",
            "medium":"https://randomuser.me/api/portraits/med/men/0.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/men/0.jpg"},
            "nat":"US"
        },

    ]}


let eventViewContainer = document.querySelector('#attendeesList');


// fetch()
// .then(function(response) {
// response.json().then(function(data){
  for (var i = 0; i < users.results.length; i++) {
    for (var j = 0; j < users.results[i].eventsClicked.length; j++) {

      if(users.results[i].eventsClicked[j] === "19671029091609") {
      let attendees =
      `

      <p id="attendees">${users.results[i].name.first + " " + users.results[i].name.last}</>
       `;

  attendeesList.innerHTML+=attendees;
}
}
};


let eventDescription = document.querySelector('.eventDescription');


// fetch()
// .then(function(response) {
// response.json().then(function(data){
  for (var i = 0; i < events.results.length; i++) {
      if(events.results[i].rsvp_code === "19671029091609") {
      let eventName =
      `

      <h1 id="eventName">${events.results[i].title}</>
       `;

  eventDescription.innerHTML+eventName;
}
}
;
=======

// console.log(users);
>>>>>>> a49cd176a0d44a8c3ef2055f42050dd64eabcf2a
