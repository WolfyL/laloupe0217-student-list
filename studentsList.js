// Write yout Javascript code in this files
var request = new XMLHttpRequest();
request.open('GET', "students.json", true); //récupère students.json et true = requêtes asynchrones autorisées (requete après chargement)
request.onreadystatechange = function() {
    if (request.readyState == 4) {
        if (request.status == 200) { //status 200 == tout s'est bien passé
            var students = JSON.parse(request.responseText);
            console.log(students);
        } else {
            dump("Erreur pendant le chargement de la page.\n");
        }
    };
}

request.send();
