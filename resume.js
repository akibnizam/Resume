"use strict";
angular.module("Resume", ["ngMaterial"]).directive("resume", function () {
    return {
        restrict: "E",
        transclude: !0,
        template: '<div class="resume">\n      <section class="main" ng-transclude></section>\n    </div>'
    }
}).directive("resumeHeading", function () {
    return {
        restrict: "E",
        scope: {firstName: "@", lastName: "@", website: "@", phone: "@", email: "@", github: "@", linkedin: "@"},
        template: '<div class="header">\n      <div class="page-title-container">\n        <h1 class="page-title page-title-first">{{firstName}}</h1>\n        <h1 class="page-title page-title-last">{{lastName}}</h1>\n      </div>\n      <div class="header-icons">\n        <span ng-if="phone" class="md-subhead page-subhead"><i class="fa fa-lg fa-phone"></i>{{phone}}</span>\n        <a style="text-decoration: none; color:inherit" href="mailto:jlian@gatech.edu"><span ng-if="email" class="md-subhead page-subhead"><i class="fa fa-lg fa-envelope"></i>{{email}}</span></a>\n        <a href="https://github.com/Lianathanoj" style="text-decoration: none; color:inherit"><span ng-if="github" class="md-subhead page-subhead"><i class="fa fa-lg fa-github"></i>{{github}}</span></a>\n        <a href="https://jonlian.com" style="text-decoration: none; color:inherit"><span ng-if="website" class="md-subhead page-subhead"><i class="fa fa-lg fa-globe"></i>{{website}}</span></a>\n<a href="https://www.linkedin.com/in/jonlian" style="text-decoration: none; color:inherit"><span ng-if="linkedin" class="md-subhead page-subhead"><i class="fa fa-lg fa-linkedin-square"></i>{{linkedin}}</span></a>\n      </div>\n    </div>'
    }
}).directive("resumeBody", function () {
    return {restrict: "E", transclude: !0, template: '<div layout="row" ng-transclude></div>'}
}).directive("resumeColumn", function () {
    return {restrict: "E", transclude: !0, template: "<div ng-transclude></div>"}
}).directive("sidebarCategory", function () {
    return {
        restrict: "E",
        scope: {name: "@"},
        transclude: !0,
        template: '<div flex="" class="category-row">\n      <div class="category">\n        <h5 class="category-row-title">{{name}}</h5>\n        <ng-transclude></ng-transclude>\n      </div>\n    </div>'
    }
}).directive("category", function () {
    return {
        restrict: "E",
        scope: {name: "@"},
        transclude: !0,
        template: '<div flex="" class="category-row">\n      <h4 class="category-row-title">{{name}}</h4>\n      <ng-transclude></ng-transclude>\n    </div>'
    }
}).directive("categoryItem", function () {
    return {
        restrict: "E",
        scope: {title: "@", subtitle: "@"},
        transclude: !0,
        template: '<div class="category">\n        <h5 class="category-title md-body-2">{{title}}</h5>&nbsp;\n        <h5 class="category-subtitle md-caption">{{subtitle}}</h5>\n        <ul class="category-bullets" ng-transclude></ul>\n    </div>'
    }
}).directive("categoryItemHref", function () {
    return {
        restrict: "E",
        scope: {title: "@", href: "@", subtitle: "@"},
        transclude: !0,
        template: '<div class="category">\n        <a style="text-decoration: none; color:inherit" href={{href}}><h5 class="category-title md-body-2">{{title}}</h5></a>&nbsp;\n        <h5 class="category-subtitle md-caption">{{subtitle}}</h5>\n        <ul class="category-bullets" ng-transclude></ul>\n    </div>'
    }
});
