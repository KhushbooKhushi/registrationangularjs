/// <reference path="Module.js" />

app.controller("UploadDocumentController", function ($scope, LoginService) {
    $scope.setFile = function (element) {
        $scope.PackagePhoto = [];
        var files = element.files;
        for (var i = 0; i < files.length; i++) {
            var reader = new FileReader();
            $scope.fileName = document.getElementById('trigger').files[i].name;
            reader.onload = function (event) {
                var dataUrl = event.target.result;
                var base64Data = dataUrl.substr(dataUrl.indexOf('base64,') + 'base64,'.length);
                $scope.PackagePhoto = base64Data;
                $scope.$apply()
            }
            // when the file is read it triggers the onload event above.
            reader.readAsDataURL(element.files[i]);
        }
    }

    $scope.PackagePhoto = [];
    $scope.curFile;
    $scope.ImageProperty = {
        file: '',
        base64: ''
    }

    $scope.setFile = function (element) {
        $scope.PackagePhoto = [];
        // get the files
        var files = element.files;
        for (var i = 0; i < files.length; i++) {
            $scope.ImageProperty.file = files[i];

            var dataUrl = files[i];
            $scope.ImageProperty.base64 = files[i];
            $scope.base64Data = dataUrl.substr(dataUrl.indexOf('base64,') + 'base64,'.length);
            $scope.PackagePhoto.push($scope.ImageProperty);
            $scope.ImageProperty = {};
            $scope.$apply();

        }
    }

});