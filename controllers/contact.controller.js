var app = angular.module("ContactApp");

app.controller("ContactCon", ContractCon);

function ContractCon(ContactDataService) {
    var self = this;
    this.editMode = false;

    ContactDataService.getContacts()
        .then(function (data) {
            self.contacts = data;
        });

    this.selectContact = function (index) {
        this.selectedContacts = self.contacts[index];
        self.successMessage = undefined;
    };

    this.toggleEditMode = function () {
        this.editMode = ! this.editMode;
    };

    this.saveUser = function () {

        this.toggleEditMode();
        var userData = this.selectedContacts;
        ContactDataService.saveUser(userData)
            .then(function () {
                self.successMessage = "User Successfully Updated";
            });
    };
}