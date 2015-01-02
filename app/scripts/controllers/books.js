'use strict';

/**
 * @ngdoc function
 * @name bookStoreApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bookStoreApp
 */
angular.module('bookStoreApp')
    .controller('BooksCtrl', function($scope, $http, $rootScope, $location,say) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        //确认登录
        if ($rootScope.userNow) {
            $http.get('../../data/bookList.json').success(function(data) {
                $scope.books = data;
            }).error(function() {
                say('获取书籍资料出错！');
            });
            $scope.modifyBook = function() {
                say('操作书籍');
            };
            $scope.deleteBook = function() {
                say('删除书籍');
            };
            $scope.exit = function() {
                delete $rootScope.userNow;
                $location.url('/');
            };
        } else {
            $location.url('/');
        }

    });