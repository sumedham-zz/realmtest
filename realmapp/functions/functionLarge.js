exports = function(arg){
  var collection = context.services.get("mongodb-atlas").db("stressTestDB").collection("largeDocumentCollection");
   return collection.findOne({Planning_Analytics_Lead__c: "hello1"})
  .then(result => {
    if(result) {
      console.log(`Successfully found document: ${result}.`);
    } else {
      console.log("No document matches the provided query.");
    }
    return result;
  })
  .catch(err => console.error(`Failed to find document: ${err}`));
  
};