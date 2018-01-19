const giphyApp = angular.module('giphyApp',[]);

giphyApp.controller('SearchController', ['$http', function($http){
    const self = this;

    self.searchGif = function(text){
        const config = {
            params: {api_key: 'f8QlTzrkob8Xbdyb9z5tyoAda2c0gQ5G', q: text}
        }
        $http.get('http://api.giphy.com/v1/gifs/search', config)
        .then(function(response){
            self.searchedGif = response.data.data;
            console.log(response.data.data);
    })}
}]);

giphyApp.controller('RandomController', ['$http', function($http){
    const self = this;

    const config = {
        params: {api_key: 'f8QlTzrkob8Xbdyb9z5tyoAda2c0gQ5G'}
    }
self.randomizeGif = function(){
    $http.get('http://api.giphy.com/v1/gifs/random', config)
        .then(function(response){
            self.randomGif = response.data.data;
            console.log(response.data.data);
        })}
     
}]);
