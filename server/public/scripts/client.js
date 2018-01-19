const giphyApp = angular.module('giphyApp',[]);

giphyApp.controller('SearchController', ['$http', function($http){
    const self = this;

    self.searchGif = function(text){
        const config = {
            params: {api_key: 'f8QlTzrkob8Xbdyb9z5tyoAda2c0gQ5G', q: text}
        }
        $http.get('http://api.giphy.com/v1/gifs/search', config)
        .then(function(response){
            self.pagination = response.data.pagination.offset;
            self.count = response.data.pagination.count;
            self.searchedGif = response.data.data;
            console.log(self.pagination, self.searchedGif);
    })}
    self.nextGif = function(){
        self.pagination += 1;
        if(self.pagination == self.count){
            self.pagination = 0;
        }
    }
    self.previousGif = function(){
        self.pagination -= 1;
        if(self.pagination < 0){
            self.pagination = self.count-1;
        }
    }

    self.favoriteGif = function(favorite){
        console.log('Favorited:', favorite);  
    }
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
    
    self.favoriteGif = function(favorite){
        $http.post('/gifs', favorite)
        .then(function(response){
            // self.randomGif = response.data.data;
            // console.log(response.data.data);
        })
        console.log('Favorited:', favorite);  
    }
}]);

giphyApp.controller('FavoriteController', function(){
    self.getFavorites = function(){
    $http.get('/gifs')
        .then(function(response){
            
        })}
})
