'use strict';

/**
 * @ngdoc overview
 * @name bookStoreApp
 * @description
 * # bookStoreApp
 *
 * Main module of the application.
 */
angular
  .module('bookStoreApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .factory('say', 
      function() {
          return function(words) {
              alert(words);
          };
      }
  )
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/books', {
        templateUrl: 'views/books.html',
        controller: 'BooksCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
