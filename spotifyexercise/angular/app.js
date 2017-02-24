console.log("Setting up angular module!");
var app = angular.module('spotifySearchApp', []);
app.controller('MainController', function ($scope, $http) {
    console.log("Configuring MainController!");
    $scope.clickSearch = function () {
        $scope.textResultsTitle = "RESULTS";
        $scope.resultsTitle = true;
        $scope.noMatches = false;
        $scope.results = true;
        $scope.resultsAlbums = false;
        var searchText = $scope.searchText;
        if (searchText == null) {
            $scope.textNoMatches = "Oh oh, you didn't fill the search box!";
            $scope.noMatches = true;
            $scope.results = false;
        }
        else {
            var settings = {
                method: "GET",
                url: "https://api.spotify.com/v1/search",
                params: {
                    q: searchText,
                    type: "artist",
                    offset: 0,
                    limit: 10
                }
            };
            console.log("Sending AJAX call!");
            var promise = $http(settings);
            console.log("Setting up callback to get notified when the promise value is resolved");
            promise.then(function successCallback(response) {
                console.log("Received a successful response!");
                console.log("Response:", response);
                var artists = response.data.artists.items;
                if (artists.length == 0) {
                    $scope.textNoMatches = "No matches found";
                    $scope.noMatches = true;
                    $scope.results = false;
                }
                else {
                    $scope.artists = [];
                    for (var _i = 0, artists_1 = artists; _i < artists_1.length; _i++) {
                        var artist = artists_1[_i];
                        var imageUrl = void 0;
                        if (artist.images.length > 0) {
                            imageUrl = artist.images[0].url;
                        }
                        else {
                            imageUrl = "../images/nopicture.png";
                        }
                        $scope.artists.push({
                            name: artist.name,
                            id: artist.id,
                            imageUrl: imageUrl
                        });
                    }
                }
            }, function errorCallback(response) {
                console.error("Call failed:", response);
            });
            $scope.searchText = null;
        }
    };
    $scope.clickArtist = function (name, id) {
        $scope.textResultsTitle = name.toUpperCase() + " ALBUMS";
        $scope.results = false;
        $scope.resultsAlbums = true;
        var settings = {
            method: "GET",
            url: "https://api.spotify.com/v1/artists/" + id + "/albums",
            data: {
                album_type: "album",
                offset: 0,
                limit: 20
            }
        };
        console.log("Sending AJAX call!");
        var promise = $http(settings);
        console.log("Setting up callback to get notified when the promise value is resolved");
        promise.then(function successCallback(response) {
            console.log("Received a successful response!");
            console.log("Response:", response);
            var albums = response.data.items;
            if (albums.length == 0) {
                $scope.textNoMatches = "No matches found";
                $scope.noMatches = true;
            }
            else {
                $scope.albums = [];
                for (var _i = 0, albums_1 = albums; _i < albums_1.length; _i++) {
                    var album = albums_1[_i];
                    var imageUrl = void 0;
                    if (album.images.length > 0) {
                        imageUrl = album.images[0].url;
                    }
                    else {
                        imageUrl = "../images/nopicture.png";
                    }
                    $scope.albums.push({
                        name: album.name,
                        imageUrl: imageUrl
                    });
                }
            }
        }, function errorCallback(response) {
            console.error("Call failed:", response);
        });
    };
});
