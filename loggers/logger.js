var app = angular.module("ContactApp", []);

app.value("Logging", function (log) {
    console.log(">>> Logging: " + log)
});
