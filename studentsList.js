// Write yout Javascript code in this files
var request = new XMLHttpRequest();
var table = document.getElementById('students');

request.open('GET', "students.json", true); //récupère students.json et true = requêtes asynchrones autorisées (requete après chargement)
request.onreadystatechange = function() {   //si l'état change alors:
    if (request.readyState == 4) {          // ==4 => requete terminée
        if (request.status == 200) {        //status 200 == tout s'est bien passé
            var students = JSON.parse(request.responseText);

            students.forEach(function(student){
              let tr= document.createElement('tr'); //tr c'est une ligne
              tr.innerHTML = `<td>${student.firstname}</td>
                            <td>${student.lastname}</td>
                            <td>${student.birthdate}</td>
                            <td>${student.adress}</td>
                            <td>${student['postal-code']}</td>
                            <td>${student.city}</td>
                            <td>${student.github}</td>
                            <td>${student.email}</td>
                            `
              table.appendChild(tr);
            })

        } else {
            dump("Erreur pendant le chargement de la page.\n");
        }
    };
}

request.send();
