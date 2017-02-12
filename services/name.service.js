(function () {
    var app = angular.module("ContactApp");

    app.service("ContactDataService", function ($http) {
        var self = this;

        self.getContacts = function () {
            return $http.get("http://localhost:3000/contacts")
                .then(function (response) {
                    self.size = response.data.length;
                    return response.data;
                });
        };

        self.saveUser = function (userData) {
            return $http.put("http://localhost:3000/contacts/" + userData.id, userData)
                .then(function (response) {
                    console.log(response);
                })
        };

        self.createUser = function (userData) {
            userData.id = self.size + 1;

            return $http.post("http://localhost:3000/contacts", userData)
                .then(function (response) {
                    console.log(response);
                    return response.data;
                })
        }

    });

})();


