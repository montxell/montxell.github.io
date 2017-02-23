console.log("Setting up jQuery!");
var resultDiv = $("#results");
$(".results-title p").hide();
var buttonSearch = $(".search-button");
buttonSearch.click(function () {
    $("#results").empty();
    $("#results-albums").empty();
    $(".results-title p").show().text("RESULTS");
    $(".noMatches p").hide();
    getSearchResults();
});
function getSearchResults() {
    var searchText = $("input").val();
    if (searchText.length == 0) {
        $(".noMatches p").show().text("Oh oh, you didn't fill the search box!");
    }
    else {
        var settings = {
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
        var promise = $.ajax(settings);
        console.log("Setting up callback to get notified when the promise value is resolved");
        promise.done(function (data) {
            console.log("Received a successful response!");
            console.log(data);
            var artists = data.artists.items;
            if (artists.length == 0) {
                $(".noMatches p").show().text("No matches found");
            }
            else {
                for (var _i = 0, artists_1 = artists; _i < artists_1.length; _i++) {
                    var artist = artists_1[_i];
                    var artistDiv = createArtistDiv(artist);
                    resultDiv.append(artistDiv);
                }
                clickArtist();
            }
        });
        promise.fail(function (jqXHR, textStatus, errorThrown) {
            console.error("Call failed:", jqXHR);
        });
        searchText = $("input").val(null);
    }
    ;
}
;
function createArtistDiv(artist) {
    var name = artist.name;
    var artistID = artist.id;
    var imageUrl;
    if (artist.images.length > 0) {
        imageUrl = artist.images[0].url;
    }
    else {
        imageUrl = "../images/nopicture.png";
    }
    var imageElem = $("<img>").addClass("artist-image").attr("src", imageUrl);
    var linkElem = $("<a>").addClass("artist-name").attr("href", "#").attr("data-artistname", name)
        .attr("data-artistid", artistID).text(name);
    var artistDiv = $("<div>");
    artistDiv.append(imageElem);
    artistDiv.append(linkElem);
    return artistDiv;
}
;
var resultAlbumDiv = $("#results-albums");
function clickArtist() {
    $(".artist-name").click(function () {
        $("#results").empty();
        var artistClick = $(this);
        var artistID = artistClick.data("artistid");
        var name = artistClick.data("artistname");
        $(".results-title p").text(name.toUpperCase() + " ALBUMS");
        getArtistAlbums(artistID);
    });
}
function getArtistAlbums(artistID) {
    var settings = {
        method: "GET",
        url: "https://api.spotify.com/v1/artists/" + artistID + "/albums",
        data: {
            album_type: "album",
            offset: 0,
            limit: 20
        }
    };
    console.log("Sending AJAX call!");
    var promise = $.ajax(settings);
    console.log("Setting up callback to get notified when the promise value is resolved");
    promise.done(function (data) {
        console.log("Received a successful response!");
        console.log(data);
        var albums = data.items;
        if (albums.length == 0) {
            $(".noMatches p").show().text("No albums found");
        }
        else {
            for (var _i = 0, albums_1 = albums; _i < albums_1.length; _i++) {
                var album = albums_1[_i];
                var albumDiv = createAlbumDiv(album);
                resultAlbumDiv.append(albumDiv);
            }
        }
    });
    promise.fail(function (jqXHR, textStatus, errorThrown) {
        console.error("Call failed:", jqXHR);
    });
}
;
function createAlbumDiv(album) {
    var nameAlbum = album.name;
    var imageAlbumUrl = album.images[0].url;
    if (album.images.length > 0) {
        imageAlbumUrl = album.images[0].url;
    }
    else {
        imageAlbumUrl = "../images/nopicture.png";
    }
    var imageAlbumElem = $("<img>").addClass("artist-image").attr("src", imageAlbumUrl);
    var spanAlbumElem = $("<span>").text(nameAlbum);
    var albumDiv = $("<div>");
    albumDiv.append(imageAlbumElem);
    albumDiv.append(spanAlbumElem);
    return albumDiv;
}
;
