angular.module('app')
    .controller('CreateStudentController', function($scope, StudentService) {

        $scope.newStudent = {
            "firstname":'',
            "lastname":'',
            "sexe":'',
            "birthdate":'',
            "city":'',
            "zipCode":'',
            "adress":'',
            "github ":'',
            "email":''
        };

        $scope.addStudent = function (){
          console.log("YOU'RE THE BOSS BRO");
          StudentService.create($scope.newStudent).then(function(res){
            //good
          }, function(err){
              //bad
          });
        };
    });
