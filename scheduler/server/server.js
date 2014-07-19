var cron = require ( "cron" ),
    esearch = require ( __dirname + '/esearch.js' ),
    mongo = require ( __dirname + '/mongo.js' );

var processResult = function ( results )
{
    var count = results.length;
    if ( count > 0 )
    {
        console.log ( "Count: " + count + " & result content is " + JSON.stringify (results) );
        mongo.clearAndAdd ( results );
    }
    else
    {
        console.warn ( "Empty Results!" );
    }
};

var scheduledTask = function ()
{
    esearch.getTop( processResult );
};

var CronJob = cron.CronJob;
var job = new CronJob({
  cronTime: '0,5,10,15,20,25,30,35,40,45,50,55 * * * * *',
  onTick: function() 
  {
    scheduledTask ();
  },
  start: false,
  timeZone: "America/Los_Angeles"
});
job.start();
