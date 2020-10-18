var weatherstats = document.getElementsByClassName('weather-stat');
var weather = document.getElementsByClassName('weather');

console.log(weatherstats)

// Default to westerly
var angle = 0;

for (var i = 0, l = weatherstats.length; i < l; i++) {

    if (weatherstats[i].innerText.includes("Wind Direction")) {

        var windDir = weatherstats[i];
        var childElement = windDir.querySelectorAll('.weather-value')[0];

        // Determine the rotation required for the stated wind direction
        switch(childElement.innerText) {
            case "WNW":
                angle = -158
                break;
            case "NW":
                angle = -135
                break;
            case "NNW":
                angle = -113
                break;
            case "N":
                angle = -90
                break;
            case "NNE":
                angle = -68
                break;
            case "NE":
                angle = -45
                break;
            case "ENE":
                angle = -23
                break;
            case "E":
                angle = 0 // redundant, but included for symmetry
                break;
            case "ESE":
                angle = 45
                break;
            case "SE":
                angle = 45
                break;
            case "SSE":
                angle = 68
                break;
            case "S":
                angle = 90
                break;
            case "SSW":
                angle = 113
                break;
            case "SW":
                angle = 135
                break;
            case "WSW":
                angle = 158
                break;
            case "W":
                angle = 180
                break;
            default:
                // do nothing
        }

        break;
    }
}

// Create the image and apply the corresponding rotation
var image = new Image();
image.src = chrome.extension.getURL("wind-arrow.png");
image.width = 64;
image.style = "transform:rotate(" + angle + "deg)";

// Add the arrow image to the weather section
weather[0].appendChild(image);
