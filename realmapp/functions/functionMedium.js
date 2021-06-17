exports = function(arg){
  var collection = context.services.get("mongodb-atlas").db("stressTestDB").collection("mediumDocumentCollection");
    collection.find({"BillingPostalCode": "hello1"})
  .toArray()
  .then(items => {
    console.log(`Successfully found ${items.length} documents.`)
    items.forEach(console.log)
    return items
  })
  .catch(err => console.error(`Failed to find documents: ${err}`))
}