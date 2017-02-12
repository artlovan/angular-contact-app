var app = angular.module("ContactApp");

app.controller("ContactCon", ContractCon);

function ContractCon(ContactDataService) {
    var self = this;

    ContactDataService.getContacts()
        .then(function (data) {
            self.contacts = data;
        });

    this.selectContact = function (index) {
        this.selectedContacts = self.contacts[index];
    };
}