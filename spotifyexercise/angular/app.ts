
// TypeScript types
/// <reference path="../common/typings/angular.d.ts" />
/// <reference path="../common/typings/spotify.d.ts" />

console.log("Setting up angular module!");

// Initialize module
let app : ng.IModule = angular.module('spotifySearchApp', []);

// Define controller
app.controller('MainController', function($scope, $http: ng.IHttpService) {

  console.log("Configuring MainController!");

  // FUNCTION CLICK ON BUTTON TO DO THE SEARCH OF ARTISTS
  $scope.clickSearch = function() {

    // Set and show the title: results
    $scope.textResultsTitle = "RESULTS";
    $scope.resultsTitle = true;

    // Hide the text: no matches found
    $scope.noMatches = false;

    // Show the results of artist search
    $scope.results = true;

    // Hide previous artist albums results
    $scope.resultsAlbums = false;

    // Get the value of the input
    let searchText = $scope.searchText;

    if (searchText == null) {

      $scope.textNoMatches = "Oh oh, you didn't filled the search box!";
      $scope.noMatches = true;  // Show the text: no matches found
      $scope.results = false;  // Hide the previous results of artist search

    } else {

      // Set the settings
      let settings = {
        method: "GET",
        url: "https://api.spotify.com/v1/search",
        params: {
          q: searchText,
          type: "artist",
          offset: 0,
          limit: 10
        }
      };

      console.log("Sending AJAX call!")

      // A promise of artists
      let promise : ng.IHttpPromise<SpotifyApi.ArtistSearchResponse> = $http(settings)

      console.log("Setting up callback to get notified when the promise value is resolved");

      promise.then(function successCallback(response) {

        console.log("Received a successful response!")
        console.log("Response:", response);


        let artists = response.data.artists.items;

        if (artists.length == 0) {

          $scope.textNoMatches = "No matches found";
          $scope.noMatches = true;

        } else {

          $scope.artists = artists.map(toSimpleArtist);

        }


      }, function errorCallback(response) {

        console.error("Call failed:", response);
      });


    // Empty the search box
    $scope.searchText = null;

    }

  };



function toSimpleArtist(artist) {

  let imageUrl;
  
  if (artist.images.length > 0) {
    imageUrl = artist.images[0].url;
  } else {
    imageUrl = "../images/nopicture.png";
  }

  return {
    name: artist.name,
    id: artist.id,
    imageUrl: imageUrl
  };
};


// FUNCTION CLICK ON ARTIST TO GET THE ARTIST'S ALBUMS

$scope.clickArtist = function(name, id) {

  // Set the title: results
  $scope.textResultsTitle = name.toUpperCase() + " ALBUMS";

  // Hide artist search
  $scope.results = false;

  // Show artist albums results
  $scope.resultsAlbums = true;


  // Set the settings to get albums
  let settings = {
    method: "GET",
    url: "https://api.spotify.com/v1/artists/" + id + "/albums",
    data: {
        album_type: "album",
        offset: 0,
        limit: 20
    }
  }

  console.log("Sending AJAX call!")

  // A promise of artists
  let promise : ng.IHttpPromise<SpotifyApi.ArtistsAlbumsResponse> = $http(settings)

  console.log("Setting up callback to get notified when the promise value is resolved");

  promise.then(function successCallback(response) {

    console.log("Received a successful response!")
    console.log("Response:", response);

    let albums = response.data.items;


    if (albums.length == 0) {

      $scope.textNoMatches = "No matches found";
      $scope.noMatches = true;

    } else {

      $scope.albums = albums.map(toSimpleAlbum);

    }


  }, function errorCallback(response) {

    console.error("Call failed:", response);
  });

};



function toSimpleAlbum(album) {

  let imageUrl;

  if (album.images.length > 0) {
    imageUrl = album.images[0].url;
  } else {
    imageUrl = "../images/nopicture.png";
  }

  return {
    name: album.name,
    imageUrl: imageUrl
  };
};


});
