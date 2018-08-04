// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('uuid');

// Create unique bucket name
var bucketName = 'suestra-sdk-sample';
// Create name for uploaded object key
var keyName = uuid.v4() + '-suestra.txt';

// Create a promise on S3 service object
var bucketPromise = new AWS.S3({apiVersion: '2006-03-01'}).createBucket({Bucket: bucketName}).promise();

// Handle promise fulfilled/rejected states
bucketPromise.then(
  function(data) {
    // Create params for putObject call
    var objectParams = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
    // Create object upload promise
    var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).putObject(objectParams).promise();
    uploadPromise.then(
      function(data) {
        console.log("Data subida satisfactoriamente " + bucketName + "/" + keyName);
      });
}).catch(
  function(err) {
    console.error(err, err.stack);
});
