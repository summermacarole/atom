/**
 * @author :  Chen Chuanliang
 * @date : 2016/8/30 16:04
 * @description :
 */
'use strict';
angular.module('myApp',['ui.router'])
.controller('myCtrl',function($scope){

})
.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('login')
  $stateProvider.state('login',{
    url:'/login',
    views:{
      '':{
        templateUrl:'src/tmpls/login.html'
      },
      'head':{
        templateUrl:'src/tmpls/includes/head.html'
      },
      'foot':{
        templateUrl:'src/tmpls/includes/foot.html'
      }
    }
  })
})