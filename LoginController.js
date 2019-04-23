/// <reference path="Module.js" />

app.controller("LoginController", function ($scope, LoginService) {
    $scope.LoginCheck = function () {
        LoginService.LoginResult($scope.AdminLogin).
             then(function (response) {
                 if ($scope.isFormValid) {
                     if (response.data.errorMsg != null) {
                         $scope.message = response.data;
                     }
                     else {
                         if (response.data == "Success") {
                             window.location.href = '/Admin/Dashboard';
                         }
                         else {
                             $scope.message = response.data.message;
                         }
                     }
                 }
                 else {
                     $scope.message = "all fields are required";
                 }
             });
    }

    //Load Nationality List
    $scope.nationalList2 = function () {
        LoginService.NationalityList().
             then(function (response) {
                 //alert("login.js");
                 if (response.data.errorMsg != null) {
                     $scope.message = response.data;
                 }
                 else {
                     $scope.nationalList = response.data;
                 }
             });
    }
    $scope.nationalList2();

    //Load Category List
    $scope.CategoryList2 = function () {
        LoginService.CategoryList().
             then(function (response) {
                 //alert("login.js");
                 if (response.data.errorMsg != null) {
                     $scope.message = response.data;
                 }
                 else {
                     $scope.categoryList = response.data;
                 }
             });
    }

    $scope.CategoryList2();


    $scope.NewRegistrationcomplete = function () {
        alert("studet");
        LoginService.RegistrationCompleted($scope.Student).
             then(function (response) {
                 if ($scope.isFormValid) {
                     if (response.data.errorMsg != null) {
                         $scope.message = response.data;
                     }
                     else {
                         if (response.data == "Success") {
                             window.location.href = '/Admin/NewRegistration';
                         }
                         else {
                             $scope.message = response.data.message;
                         }
                     }
                 }
                 else {
                     $scope.message = "all fields are required";
                 }
             });
    }

    $scope.updateSelection = function () {
        alert("changed");
    }

    $scope.DOB = new Date();
    $scope.DOB.setMinutes($scope.DOB.getMinutes() + $scope.DOB.getTimezoneOffset());

    //calculate age
    $scope.CalculateAge = function () {
        alert("Calculate age");
        if ($scope.DOB != "" && $scope.DOB != undefined) {
            // var birthday = new Date($scope.DOB);

            var today = new Date();
            today.setMinutes(today.getMinutes() + today.getTimezoneOffset());

            var age = ((today - $scope.DOB) / (31557600000));
            var age = Math.floor(age);
            $scope.Age = age;
            alert(today-$scope.DOB);
        }
    }
    $scope.submit = function () {
        $scope.submitted = true;

        if (!$scope.submitted)
            $scope.NewRegistrationcomplete($scope.Student);
    }

    $scope.updateSelection = function (position, entities) {
        angular.forEach(entities, function (subscription, index) {
            if (position != index)
                subscription.checked = false;
        });
    }
    function ClearForm() {
        $scope.AdminLogin.AdminName = "";
        $scope.AdminLogin.AdminPassword = "";
    }

    $scope.NewRegistrationCall = function () {
        window.location.href = '/Login/NewRegistration';
    }

    $scope.UploadDocument = function () {
        alert("hello");
        window.location.href = '/UploadDocument/UploadDocumentView';
    }

    $scope.$watch('loginForm.$valid', function (value) {

        $scope.isFormValid = value;
    })
});