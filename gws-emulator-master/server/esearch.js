var webcall = require ( 'request' );

var esIndexName = "trends";
var esTypeName = "word";
var baseUrl = "http://localhost:9200";

var getUrl = function ()
{
    return baseUrl + "/" + esIndexName + "/" + esTypeName + "/";
};
var logInfo = function ( s )
{
    console.info ( "*** VONCHAV ***: " + s );
};
var logWarn = function ( s )
{
    console.warn ( "*** VONCHAV ***: " + s );
};

exports.add = function ( values ) {
    var url = getUrl ();
    values.forEach ( function (v) {
        webcall.post ( {"url": url, "json": {"name": v}}, function (error, response, body) 
        {
            if ( ! error && 201 === response.statusCode )
            {
                logInfo ( "received " + JSON.stringify (body) );
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
    } );
};
