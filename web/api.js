function searchAttractions(attractionInfo) {
  let keywords = attractionInfo;

  $.ajax({
  type:"GET",
  url:"https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=pJti2UsHbpqAHLpCbe9Lc7I0OuNQM1lW&size=1&keyword=" + keywords,
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json._embedded.attractions[0].name);
              console.log("UAIII 1");
              let attractionName = json._embedded.attractions[0].name;
              let attractionID = json._embedded.attractions[0].id;
              console.log(attractionName);
              return attractionID;
              // Parse the response.
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
  });
}

function searchClassifications(classificationInfo) {
  let keywords = classificationInfo;

  $.ajax({
  type:"GET",
  url:"https://app.ticketmaster.com/discovery/v2/classifications.json?apikey=pJti2UsHbpqAHLpCbe9Lc7I0OuNQM1lW&size=1&keyword=" + keywords,
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json._embedded.classifications[0].segment.name);
              console.log("UAIII 222");
              let classificationName = (json._embedded.classifications[0].segment).name;
              let classificationID = (json._embedded.classifications[0].segment).id;
              console.log(classificationName);
              return classificationID;
              // Parse the response.
              // Do other things.
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
  });
}

function searchEvents(eventInfo) {
  let keywords = eventInfo[0];
  let attractionName = eventInfo[1];
  let radius = eventInfo[2];
  let startDateRange = eventInfo[3];
  let endDateRange = eventInfo[4];
  let sort = eventInfo[5];
  let city = eventInfo[6];
  let countryCode = eventInfo[7];
  let stateCode = eventInfo[8];
  let classificationName = eventInfo[9];

  let attractionID = "";
  let classificationID = "";

  if (attractionName !== "") {
    attractionID = searchAttractions(attractionName);
  }
  if (classificationName !== "") {
    classificationID = searchClassifications(classificationName);
  }

  let urlLink = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=pJti2UsHbpqAHLpCbe9Lc7I0OuNQM1lW&size=10";
  if (keywords !== "") {
    urlLink = urlLink + "&keyword=" + keywords;
    console.log("passou aqui");
  }
  if (radius !== "")
    urlLink = urlLink + "&radius=" + radius;
  if (startDateRange !== "")
    urlLink = urlLink + "&startDateTime=" + startDateRange;
  if (endDateRange !== "")
    urlLink = urlLink + "&endDateTime=" + endDateTime;
  if (sort !== "")
    urlLink = urlLink + "&sort=" + sort;
  if (city !== "")
    urlLink = urlLink + "&city=" + city;
  if (countryCode !== "")
    urlLink = urlLink + "&countryCode=" + countryCode;
  if (stateCode !== "")
    urlLink = urlLink + "&stateCode=" + stateCode;
  if (attractionID !== "" && attractionID != undefined)
    urlLink = urlLink + "&attractionId=" + attractionID;
  if (classificationID !== "" && classificationID != undefined)
    urlLink = urlLink + "&classificationId=" + classificationID;


  $.ajax({
  type:"GET",
  url:urlLink,
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json);
              document.getElementById("spec").innerHTML = "Ok, so this is a list of the 10 most relevant events we found:";
              let i;
              for (i = 0; i < 10; i++) {
                let eventName = json._embedded.events[i].name;
                let eventVenue = json._embedded.events[i]._embedded.venues[0].name;
                let eventCity = json._embedded.events[i]._embedded.venues[0].city.name;
                let eventState = "";
                if (json._embedded.events[i]._embedded.venues[0].hasOwnProperty('state'))
                   eventState = json._embedded.events[i]._embedded.venues[0].state.name;
                console.log(typeof json._embedded.events[i]._embedded.venues[0].state !== undefined);
                let eventCountry = json._embedded.events[i]._embedded.venues[0].country.name;
                let eventTime = json._embedded.events[i].dates.start.localTime;
                let eventDate = json._embedded.events[i].dates.start.localDate;
                let eventPriceMin = "";
                if (json._embedded.events[i].hasOwnProperty('priceRanges'))
                  eventPriceMin = json._embedded.events[i].priceRanges[0].min;
                let eventPriceMax = "";
                if (json._embedded.events[i].hasOwnProperty('priceRanges'))
                  eventPriceMax = json._embedded.events[i].priceRanges[0].max;
                let eventLink = json._embedded.events[i].url;

                document.getElementById("event" + i).innerHTML = "Event name: " + eventName + "\n" +
                "Event venue: " + eventVenue + "\n" +
                "Event location: " + eventCity + ", " + eventState + ", " + eventCountry + "\n" +
                "Event time: " + eventTime + "(" + eventDate + ")\n" +
                "Event price range: $" + eventPriceMin + "-" + eventPriceMax + "\n" +
                "Event link: " + eventLink;
              }
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
  });


}
