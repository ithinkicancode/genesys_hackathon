var mongo = require('mongodb').MongoClient;

var mongoUrl = 'mongodb://127.0.0.1:27017/genesys';
var collectionName = "trends";

var handleError = function ( e )
{ 
    if ( e )
    {
        console.error ( "Error occurred: " + JSON.stringify (e) );
        throw e;
    }
}

var insertDoc = function ( d )
{

};

exports.clearAndAdd = function ( top10 ) {

  mongo.connect ( mongoUrl, function (e, db) 
  {
    handleError ( e );

    var collection = db.collection ( collectionName );
    collection.remove( {}, function (e, docs) {
        handleError ( e );
    } );

    top10.forEach ( function (d) {

        collection.insert ( d, function (e, docs) {
            handleError ( e );
        });
    });

  } );
};

