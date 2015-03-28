var db = new Firebase("https://useyourworld.firebaseio.com/");

var userRef = db.child("users");


userRef.update({

"led": "off"

)};
