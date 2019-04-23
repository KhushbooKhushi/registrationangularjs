/// <reference path="Module.js" />


app.service("LoginService", function ($http) {
    this.LoginResult = function (AdminLogin) {

        var response = $http({
            method: "post",
            url: "Login/LoginResult",
            data: JSON.stringify(AdminLogin),
            dataType: "json"
        });
        return response;
    }

    this.RegistrationCompleted = function (Student) {
        alert(Student);
        var response = $http({
            method: "post",
            url: "Login/RegistrationCompleted",
            data: JSON.stringify(Student),
            dataType: "json"
        });
        return response;
    }

    this.AdminDashboard = function () {
        var response = $http({
            method: "post",
            url: "Admin/Dashboard",
            data: JSON.stringify(),
            dataType: "json"
        });
        return response;
    }

    //Controller method call to load Nationality List
    this.NationalityList = function () {
        return $http.get("/Master/GetNationalityList")
    }

    //Controller method call to load Category List
    this.CategoryList = function () {
        return $http.get("/Master/GetCategoryList")
    }

    this.ReligiounList = function () {
        return $http.get("/Master/GetReligiouList")
    }

});

