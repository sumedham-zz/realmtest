exports = function(arg){
  var collection = context.services.get("mongodb-atlas").db("stressTestDB").collection("smallDocumentCollection");
  console.log("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus tincidunt pretium. Donec in ante semper, suscipit orci finibus, commodo diam. Sed tincidunt neque a imperdiet lacinia. Maecenas faucibus metus ante, in pretium erat bibendum eget. Vestibulum scelerisque nibh urna, sed porttitor libero blandit nec. Nulla dapibus quam sit amet tellus fermentum consectetur. Mauris lorem est, scelerisque at massa ac, sagittis eleifend enim. Donec sed elit in tellus malesuada dignissim. Mauris commodo sagittis diam, vitae tempor quam aliquam at. Orci varius natoque penatibus et magnis dis nullam.")
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