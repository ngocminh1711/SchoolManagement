"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumSignIn = exports.enumUser = exports.enumAdmin = exports.enumStudent = exports.enumTeacher = exports.searchOfSearch = void 0;
var searchOfSearch;
(function (searchOfSearch) {
    searchOfSearch[searchOfSearch["SEARCHBYID"] = 1] = "SEARCHBYID";
    searchOfSearch[searchOfSearch["SEARCHBYNAME"] = 2] = "SEARCHBYNAME";
    searchOfSearch[searchOfSearch["SEARCHBYFACULTY"] = 3] = "SEARCHBYFACULTY";
    searchOfSearch[searchOfSearch["BACK"] = 4] = "BACK";
})(searchOfSearch = exports.searchOfSearch || (exports.searchOfSearch = {}));
var enumTeacher;
(function (enumTeacher) {
    enumTeacher[enumTeacher["CREATETEACHER"] = 1] = "CREATETEACHER";
    enumTeacher[enumTeacher["SEARCHTEACHER"] = 2] = "SEARCHTEACHER";
    enumTeacher[enumTeacher["DELETEATEACHER"] = 3] = "DELETEATEACHER";
    enumTeacher[enumTeacher["EDITWAGE"] = 4] = "EDITWAGE";
    enumTeacher[enumTeacher["TOTALWAGE_TEACHER"] = 5] = "TOTALWAGE_TEACHER";
    enumTeacher[enumTeacher["EDITINFOTEACHER"] = 6] = "EDITINFOTEACHER";
    enumTeacher[enumTeacher["BACK"] = 7] = "BACK";
})(enumTeacher = exports.enumTeacher || (exports.enumTeacher = {}));
var enumStudent;
(function (enumStudent) {
    enumStudent[enumStudent["CREATESTUDENT"] = 1] = "CREATESTUDENT";
    enumStudent[enumStudent["SEARCHSTUDENT"] = 2] = "SEARCHSTUDENT";
    enumStudent[enumStudent["DELETEASTUDENT"] = 3] = "DELETEASTUDENT";
    enumStudent[enumStudent["EDITSTUDENT"] = 4] = "EDITSTUDENT";
    enumStudent[enumStudent["RANKED"] = 5] = "RANKED";
    enumStudent[enumStudent["BACK"] = 0] = "BACK";
})(enumStudent = exports.enumStudent || (exports.enumStudent = {}));
var enumAdmin;
(function (enumAdmin) {
    enumAdmin[enumAdmin["SHOWTEACHER"] = 1] = "SHOWTEACHER";
    enumAdmin[enumAdmin["SHOWSTUDENT"] = 2] = "SHOWSTUDENT";
    enumAdmin[enumAdmin["MENUTEACHER"] = 3] = "MENUTEACHER";
    enumAdmin[enumAdmin["MENUSTUDENT"] = 4] = "MENUSTUDENT";
    enumAdmin[enumAdmin["SORTFACUTLY"] = 5] = "SORTFACUTLY";
    enumAdmin[enumAdmin["CREATEACCOUNT"] = 6] = "CREATEACCOUNT";
    enumAdmin[enumAdmin["CREATEUSER"] = 7] = "CREATEUSER";
    enumAdmin[enumAdmin["UPDATEPASSWORD"] = 8] = "UPDATEPASSWORD";
    enumAdmin[enumAdmin["EXIT"] = 9] = "EXIT";
})(enumAdmin = exports.enumAdmin || (exports.enumAdmin = {}));
var enumUser;
(function (enumUser) {
    enumUser[enumUser["SHOWTEACHER"] = 1] = "SHOWTEACHER";
    enumUser[enumUser["SHOWSTUDENT"] = 2] = "SHOWSTUDENT";
    enumUser[enumUser["SEARCHSTUDENT"] = 3] = "SEARCHSTUDENT";
    enumUser[enumUser["SEARCHTEACHER"] = 4] = "SEARCHTEACHER";
    enumUser[enumUser["CHANGPASSWORD"] = 5] = "CHANGPASSWORD";
    enumUser[enumUser["EXIT"] = 6] = "EXIT";
})(enumUser = exports.enumUser || (exports.enumUser = {}));
var enumSignIn;
(function (enumSignIn) {
    enumSignIn[enumSignIn["SIGNIN"] = 1] = "SIGNIN";
    enumSignIn[enumSignIn["EXIT"] = 2] = "EXIT";
})(enumSignIn = exports.enumSignIn || (exports.enumSignIn = {}));
