"use strict";
var searchOfSearch;
(function (searchOfSearch) {
    searchOfSearch[searchOfSearch["SEARCHBYID"] = 1] = "SEARCHBYID";
    searchOfSearch[searchOfSearch["SEARCHBYNAME"] = 2] = "SEARCHBYNAME";
    searchOfSearch[searchOfSearch["SEARCHBYFACULTY"] = 3] = "SEARCHBYFACULTY";
    searchOfSearch[searchOfSearch["BACK"] = 4] = "BACK";
})(searchOfSearch || (searchOfSearch = {}));
var enumTeacher;
(function (enumTeacher) {
    enumTeacher[enumTeacher["CREATETEACHER"] = 1] = "CREATETEACHER";
    enumTeacher[enumTeacher["SEARCHTEACHER"] = 2] = "SEARCHTEACHER";
    enumTeacher[enumTeacher["DELETEATEACHER"] = 3] = "DELETEATEACHER";
    enumTeacher[enumTeacher["EDITWAGE"] = 4] = "EDITWAGE";
    enumTeacher[enumTeacher["TOTALWAGE_TEACHER"] = 5] = "TOTALWAGE_TEACHER";
    enumTeacher[enumTeacher["EDITINFOTEACHER"] = 6] = "EDITINFOTEACHER";
    enumTeacher[enumTeacher["BACK"] = 7] = "BACK";
})(enumTeacher || (enumTeacher = {}));
var enumStudent;
(function (enumStudent) {
    enumStudent[enumStudent["CREATESTUDENT"] = 1] = "CREATESTUDENT";
    enumStudent[enumStudent["SEARCHSTUDENT"] = 2] = "SEARCHSTUDENT";
    enumStudent[enumStudent["DELETEASTUDENT"] = 3] = "DELETEASTUDENT";
    enumStudent[enumStudent["EDITSTUDENT"] = 4] = "EDITSTUDENT";
    enumStudent[enumStudent["RANKED"] = 5] = "RANKED";
    enumStudent[enumStudent["BACK"] = 0] = "BACK";
})(enumStudent || (enumStudent = {}));
