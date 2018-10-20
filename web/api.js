function searchAttractions(attractionInfo) {
  let keywords = attractionInfo;

  $.ajax({
  type:"GET",
  url:"https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=pJti2UsHbpqAHLpCbe9Lc7I0OuNQM1lW&size=1&keyword=" + keywords,
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json._embedded.attractions[0].name);
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
              console.log(json);
              let classificationName = json._embedded.classifications[0].segment.name;
              let classificationID = json._embedded.classifications[0].segment.id;
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

  let urlLink = "https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=pJti2UsHbpqAHLpCbe9Lc7I0OuNQM1lW";
  if (keywords !== "")
    urlLink = urlLink + "&keyword=" + keywords;
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
  if (attractionID !== "")
    urlLink = urlLink + "&attractionId=" + attractionID;
  if (classificationID !== "")
    urlLink = urlLink + "&classificationId=" + classificationID;


  $.ajax({
  type:"GET",
  url:urlLink,
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json);
              document.getElementById("spec").innerHTML = "Ok, so this is a list of the 10 most relevant events we found:";
           },
  error: function(xhr, status, err) {
              // This time, we do not end up here!
           }
  });


}
