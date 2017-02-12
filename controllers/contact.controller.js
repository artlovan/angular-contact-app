var app = angular.module("ContactApp");

app.controller("ContactCon", ContractCon);

function ContractCon(ContactDataService) {
    var self = this;
    this.editMode = false;
    this.createMode = false;
    this.addMode = false;

    ContactDataService.getContacts()
        .then(function (data) {
            self.contacts = data;
        });

    this.selectContact = function (index) {
        this.selectedContacts = self.contacts[index];
        self.successMessage = undefined;
        self.errorMessage = undefined;
    };

    this.toggleEditMode = function () {
        this.editMode = !this.editMode;
    };

    this.saveUser = function () {

        this.toggleEditMode();
        var userData = this.selectedContacts;

        if (this.addMode) {
            var newUserData = this.selectedContacts;
            ContactDataService.createUser(newUserData)
                .then(function (data) {
                        self.newUserData = data;
                        self.successMessage = "New User Successfully Updated";
                    },
                    function () {
                        self.errorMessage = "An error occurred. Please try again."
                    });
            this.addMode = false;
        } else {
            ContactDataService.saveUser(userData)
                .then(function () {
                        self.successMessage = "User Successfully Updated";
                    },
                    function () {
                        self.errorMessage = "An error occurred. Please try again."
                    });
        }

    };

    this.toggleCreateMode = function () {
        this.createMode = !this.createMode;
    };

    this.addUser = function () {
        this.toggleEditMode();
        this.addMode = true;
        this.selectedContacts = {};
    }
}