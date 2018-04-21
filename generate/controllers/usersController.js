
//ici toutes les FONCTIONS pour gérer la connection users

var database = require('../models/usersModel');

//  /verify
exports.verify_user = function (req, res) {
   
    if (database.users.username === req.body.username && database.users.password === req.body.password) { //watch out

        res.status(200).json({
            data: "vous etes connecté"
        });

    } else {

        res.status(404).json({
            data: "erreur durant la connexion"
        });

        

    }
};

//  /connected
exports.connected_user = function (req, res) {

    

    if (connected == false) {

        console.log('connection ok');
        window.alert("You are logged in as administrator");
        window.open('localhost:3002/cartes/index');
    } else {

        console.log('pas de connection');
        window.alert("Incorrect username or password!");
    }

};

//function clicked(connection_user) {
//    var user = document.getElementBy('username');
//    var pass = document.getElementBy('password');

//}else{
//             
//                res.status(404).json({
//                data: database.users.username
//                });
//    
//                res.status(404).json({
//                data: database.users.username
//                });
//                
//                window.alert("Incorrect username or password!");
//                return true;