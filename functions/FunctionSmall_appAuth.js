exports = function(arg){
  var collection = context.services.get("mongodb-atlas").db("stressTestDB").collection("smallDocumentCollection");
   return collection.findOne({"Activity_Frequency__c":"hello1"})
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