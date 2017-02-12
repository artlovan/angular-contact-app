(function () {
    var app = angular.module("ContactApp");

    function AppConfig() {
        this.name = "Contact App";
        this.author = "Danny";
        this.company = "FrontEnd";
        this.version = 1;
    }

    app.service("AppConfigService", AppConfig);
})();

