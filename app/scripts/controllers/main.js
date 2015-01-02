'use strict';

/**
 * @ngdoc function
 * @name bookStoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookStoreApp
 */
angular.module('bookStoreApp')
    .directive('ifeellucky', ['say',function(say) {
        return {
            template: '<button class="btn btn-primary" ng-click="lucky()">i feel lucky</button>',
            replace: true,
            transclude: true,
            link: function(scope) {
                scope.lucky = function() {
                    say('yeah you are lucky!');
                };
            }
        };
    }])
    .controller('MainCtrl', ['$scope', '$rootScope', '$http', '$location', 'say',
        function($scope, $rootScope, $http, $location, say) {
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];

            $scope.userList = {};

            //伪HTTP请求，仅获取本地用户列表json数据
            $http({
                method: 'GET',
                url: '../../data/userList.json'
            }).success(function(data) {
                $scope.admin = data;
            }).error(function() {
                say("获取本地保存的用户数据失败！");
            });

            //初始化表单内输入的user
            $scope.user = {};

            //验证用户
            $scope.confirm = function() {
                for (var i = 0; i < $scope.admin.length; i++) {
                    if ($scope.user.name === $scope.admin[i].name && $scope.user.passwd === $scope.admin[i].passwd) {
                        $rootScope.userNow = $scope.user;
                        return $location.url('/books');
                    }
                }
                say('请确认用户名密码正确');
            };

            //重置表单
            $scope.reset = function() {
                $scope.user = {};
            };
        }
    ]);