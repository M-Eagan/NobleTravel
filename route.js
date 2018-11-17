"use strict";
{
  angular
    .module("app", ["ngRoute"])
    .config(function($routeProvider) {
      $routeProvider
        .when("/blog", {
            controller: "blogController as routing",
            templateUrl: "components/blog/blog.html"
        })
        .when("/contact", {
          controller: "contactController as routing",
          templateUrl: "components/contact/contact.html"
        })
        .when("/countryfacts", {
            controller: "countryfactsController as routing",
            templateUrl: "components/countryfacts/countryfacts.html"
          })
          .when("/home", {
            controller: "homeController as routing",
            templateUrl: "components/home/home.html"
          })
          .when("/media", {
            controller: "mediaController as routing",
            templateUrl: "components/media/media.html"
          })
          .when("/packages", {
            controller: "packagesController as routing",
            templateUrl: "components/packages/packages.html"
          })
        .otherwise({ redirectTo: "/home" });
    });
}


