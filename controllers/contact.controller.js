var app = angular.module("ContactApp");

app.controller("ContactCon", ContractCon);

function ContractCon(ContactDataService) {
    this.contacts = ContactDataService.contacts;

    this.selectContact = function (index) {
        this.selectedContacts = this.contacts[index];
    };
}