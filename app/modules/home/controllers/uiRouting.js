var myApp = angular.module("myApp",['ui.router']);
myApp.config(function($stateProvider,$urlRouterProvider) {
    var contact = {
        name: 'contact',
        url: '/contact',
        template: '<h3>CONTACT US</h3>'
    };
    var home = {
        name: 'home',
        url: '/home',
        templateUrl: 'home.html',
        controller : 'uiRoutingCtrl'
    };
    var about = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    };
    var productDetail = {
        name: 'productDetail',
        url: '/productDetail',
        templateUrl: 'product.html',
        controller: 'uiRoutingCtrl'
    };
    var cart = {
        name: 'cart',
        url: '/cart',
        templateUrl: 'cart.html',
        controller: 'uiRoutingCtrl'
    };

    $stateProvider.state(contact);
    $stateProvider.state(home);
    $stateProvider.state(about);
    $stateProvider.state(productDetail);
    $stateProvider.state(cart);
    $urlRouterProvider.otherwise('/home');
});

myApp.factory('pathService',function($state){

    return {
        goto:function(stateName){
            $state.go(stateName);
        }
    };
});

myApp.controller("uiRoutingCtrl",['$scope','$rootScope','pathService',function($scope,$rootScope,pathService){
    $scope.goToProductDetail = function() { 
        pathService.goto('productDetail');
    };
    $scope.goToProductCart = function() { 
        pathService.goto('cart');
    };

    $scope.viewClass = "";
    $scope.products=[
        {
            image : 'download.jpg',
            title :'Apple iphone 7',
            description:'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
            price : '$20.000'
        },
        {
            image : 'download.jpg',
            title :'Apple iphone 7s',
            description:'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
            price : '$21.000'
        },
        {
            image : 'download.jpg',
            title :'Apple iphone 7s2',
            description:'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
            price : '$22.000'
        },
        {
            image : 'download.jpg',
            title :'Apple iphone 7s',
            description:'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
            price : '$21.000'
        },
        {
            image : 'download.jpg',
            title :'Apple iphone 7s',
            description:'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
            price : '$21.000'
        },
        {
            image : 'download.jpg',
            title :'Apple iphone 7s',
            description:'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.',
            price : '$21.000'
        },
];

}]);
$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});