$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAM7gyBft8kT5CRyNUsH17sHRcN7NwQhPo",
    authDomain: "multi-logman.firebaseapp.com",
    databaseURL: "https://multi-logman.firebaseio.com",
    projectId: "multi-logman",
    storageBucket: "multi-logman.appspot.com",
    messagingSenderId: "274101005447"
  };
  firebase.initializeApp(config);
});

let data = firebase.database().ref();
data.on('child_added', function(guest) {
  console.log("added");
});
data.push({
    name: $('#name').val(),
    comment: $('#comment').val(),
  });
