(function () {
    var app = angular.module("ContactApp");

    app.factory("AppDataFactoryService", function () {
        var value = {};

        value.name = "Contact App";
        value.author = "Danny";
        value.company = "FrontEnd";
        value.version = 1;

        return value;
    });
})();