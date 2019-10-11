const AWS = require('aws-sdk');
const client = AWS.DynamoDB.DocumentClient();


exports.handler = function(event) {
    let params = {
        item: {
            date: Date.now(),
            name: event.name,
        },
        TableName: `Users`,
    }
    client.put(params,function(error,data){
         error && console.log(error);
         let response = {
         	statusCode: 200,
            body: JSON.stringify({
                message: `User added!`,
            }),
         }
         return response;   
    });

}