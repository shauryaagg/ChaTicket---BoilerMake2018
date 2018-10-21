import {
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} from "mongodb-stitch-browser-sdk";

let location = "";
let

$.ajax({
  type:"GET",
  url:"https://app.ticketmaster.com/discovery/v2/attractions.json?apikey={apikey}",
})


const client = Stitch.initializeDefaultAppClient('boilermake-aoncy');
const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('Events');

client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
  return client.callFunction("getConcerts")
).then(concertList =>

  //
).then(docs => {
    console.log("Found docs", docs)
    console.log("[MongoDB Stitch] Connected to Stitch")
}).catch(err => {
    console.error(err)
});
