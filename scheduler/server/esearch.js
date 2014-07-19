var webcall = require ( 'request' );

var esIndexName = "trends";
var esTypeName = "word";
var baseUrl = "http://localhost:9200";

var getUrl = function ()
{
    return baseUrl + "/" + esIndexName + "/" + esTypeName + "/_search";
};
var logInfo = function ( s )
{
    console.info ( "*** VONCHAV ***: " + s );
};
var logWarn = function ( s )
{
    console.warn ( "*** VONCHAV ***: " + s );
};

var requestJson =
{
    "query" : {
        "match_all" : {  }
    },
    "facets" : {
        "tag" : {
            "terms" : {
                "field" : "name",
                "size" : 10
            }
        }
    }
};

exports.getTop = function (f) {
    var result;
    var url = getUrl ();
    webcall.post ( {"url": url, "json": requestJson}, function (error, response, body) 
    {
        if ( ! error && 200 === response.statusCode )
        {
            logInfo ( "received " + JSON.stringify (body) );
            f ( body.facets.tag.terms );
        }
        else
        {
            var o;
            if ( error )
            {
                o = error;
            }
            else
            {
                o = response;
            }
            logWarn ( "Error: " + JSON.stringify (o) );
        }
    });
};
