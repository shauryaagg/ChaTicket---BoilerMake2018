exports = async function(){
  const Formula1 = context.services.get("Formula1");
  const mongo = context.services.get("mongodb-atlas");
  
  const raceName = await races.get({
    url: "https://tickets.formula1.com/en/3320-united-states-fom/"
  });
  mongo.db("some").collection("Formula1").insertOne({ raceName });
  
  return await mongo.db("some").collection("Formula1").find({ raceName: "United States Grand Prix" }).toArray();
};