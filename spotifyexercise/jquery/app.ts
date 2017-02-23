
// TypeScript types
/// <reference path="../common/typings/jquery.d.ts" />
/// <reference path="../common/typings/spotify.d.ts" />

console.log("Setting up jQuery!");


// **** GET ARTISTS ****

// Results element
let resultDiv = $("#results");

// Hide the title: results
$(".results-title p").hide();

// Button element
let buttonSearch = $(".search-button");


// FUNCTION CLICK ON BUTTON TO DO THE SEARCH OF ARTISTS
buttonSearch.click(function() {

  // Delete previous search
  $("#results").empty();       // Option2: $("#results div").remove();

  // Delete previous artist albums results
  $("#results-albums").empty();   // Option2: $("#results-albums div").remove();

  // Show the title: results
  $(".results-title p").show().text("RESULTS");

  // Hide the text: no matches found
  $(".noMatches p").hide();

  // Call the function to get the results of the search
  getSearchResults();

});



// FUNCTION TO GET THE ARTISTS
function getSearchResults() {

  // Get the value of the input
  let searchText = $("input").val();

  if (searchText.length == 0) {
    $(".noMatches p").show().text("Oh oh, you didn't fill the search box!");

  } else {

    // Set the settings
    let settings = {
        method: "GET",
        url: "https://api.spotify.com/v1/search",
        data: {
            q: searchText,
            type: "artist",
            offset: 0,
            limit: 10
        }
    };


    console.log("Sending AJAX call!");

    // A promise of artists
    let promise : JQueryXHR = $.ajax(settings); // Option2: let result = $.ajax(settings);

    console.log("Setting up callback to get notified when the promise value is resolved");

    promise.done(function (data: SpotifyApi.ArtistSearchResponse) {  // Option2: result.done(function(data) {

        console.log("Received a successful response!")
        console.log(data);

        let artists = data.artists.items;


        if (artists.length == 0) {

          $(".noMatches p").show().text("No matches found");

        } else {

          for (let artist of artists) {
              let artistDiv = createArtistDiv(artist);
              resultDiv.append(artistDiv);
          }

          clickArtist();

        }

    });

    promise.fail(function(jqXHR, textStatus, errorThrown) {
      console.error("Call failed:", jqXHR);
    });


  //Empty the search box
  searchText = $("input").val(null);

  };

};


// CREATE A DIV OF EACH ARTIST FOUND
function createArtistDiv(artist: any) {

    let name = artist.name;
    let artistID = artist.id;

    let imageUrl;

    if (artist.images.length > 0) {
      imageUrl = artist.images[0].url;
    } else {
      imageUrl = "../images/nopicture.png";
    }


    let imageElem = $("<img>").addClass("artist-image").attr("src", imageUrl);

    let linkElem = $("<a>").addClass("artist-name").attr("href", "#").attr("data-artistname", name)
                   .attr("data-artistid", artistID).text(name);

    let artistDiv = $("<div>");
    artistDiv.append(imageElem);
    artistDiv.append(linkElem);
    return artistDiv;

};



// **** GET ALBUMS OF THE ARTIST ****

let resultAlbumDiv = $("#results-albums");


// FUNCTION CLICK ON ARTIST TO SHOW THE ARTIST'S ALBUMS
function clickArtist() {
  $(".artist-name").click(function() {

    // Delete artist search
    $("#results").empty();       // Option2: $("#results div").remove();

    // Click on the selected artist
    let artistClick = $(this);
    let artistID = artistClick.data("artistid");
    let name = artistClick.data("artistname");

    // Show the title: artist albums
    $(".results-title p").text(name.toUpperCase() + " ALBUMS");

    // Get albums
    getArtistAlbums(artistID);

  });
}


// FUNCTION TO GET THE ARTIST'S ALBUMS
function getArtistAlbums(artistID) {

  // Set the settings to get albums
  let settings = {
    method: "GET",
    url: "https://api.spotify.com/v1/artists/" + artistID + "/albums",
    data: {
        album_type: "album",
        offset: 0,
        limit: 20
    }
  }


  console.log("Sending AJAX call!");

  // A promise of artists
  let promise : JQueryXHR = $.ajax(settings); // Option: let result = $.ajax(settings);

  console.log("Setting up callback to get notified when the promise value is resolved");

  promise.done(function (data: SpotifyApi.ArtistsAlbumsResponse) {  // Option: result.done(function(data) {

      console.log("Received a successful response!")
      console.log(data);

      let albums = data.items;

      if (albums.length == 0) {

        $(".noMatches p").show().text("No albums found");

      } else {

        for (let album of albums) {
            let albumDiv = createAlbumDiv(album);
            resultAlbumDiv.append(albumDiv);
        }

      }

  });

  promise.fail(function(jqXHR, textStatus, errorThrown) {
    console.error("Call failed:", jqXHR);
  });

};


// CREATES A DIV OF EACH ALBUM
function createAlbumDiv(album: any) {

    let nameAlbum = album.name;
    let imageAlbumUrl = album.images[0].url;

    if (album.images.length > 0) {
      imageAlbumUrl = album.images[0].url;
    } else {
      imageAlbumUrl = "../images/nopicture.png";
    }

    let imageAlbumElem = $("<img>").addClass("artist-image").attr("src", imageAlbumUrl);
    let spanAlbumElem = $("<span>").text(nameAlbum);

    let albumDiv = $("<div>");
    albumDiv.append(imageAlbumElem);
    albumDiv.append(spanAlbumElem);
    return albumDiv;
};
