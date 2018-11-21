registrationModule.controller("saController", function ($scope, $http) {


    $scope.init = function (message) {
        // do something with roomId
        $scope.selectedOption = $scope.options[0];
        console.log("message: " + message);
        $scope.course = message;

        if ($scope.course == 1) {
            $scope.selectedOption = $scope.options[0];
        } else if ($scope.course == 2) {
            $scope.selectedOption = $scope.options[1];
        }

        //$scope.selectedOption =  message ;
    }

    $scope.options = [{ name: "a", id: 1 }, { name: "b", id: 2 }];
    //$scope.selectedOption = $scope.options[1];

    //var myVal = $("#myInput").data("myValue");

    //console.log("myVal: " + myVal);
    //console.log($scope.Registration.para1);


    $scope.save = function () {
        $scope.error = false;
        console.log($scope.Registration);




        toastr.success("Request for Registeration Submitted!", "Abacus Cloud Academy");
        $scope.reset();

        //$http.post('/Home/Save', $scope.Registration).then(

        //    function () {
        //        toastr.success("Request for Registeration Submitted!", "AWS Academy");
        //        $scope.reset();
        //    },
        //    function () {
        //        $scope.error = true;
        //        toastr.error("Oops Something Went Wrong ...", 'AWS Academy');
        //    });
    };

    $scope.reset = function () {

        $scope.Registration = {};

        if ($scope.registrationForm != undefined) {
            $scope.registrationForm.$setPristine();
            $scope.registrationForm.$setUntouched();
        }


    };


});