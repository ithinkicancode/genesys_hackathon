genesys_hackathon
=================

Instructions to get this up and running on mac:

1. Install homebrew (visit Homebrew's site for detailed instructions).
2. Install Java 7 (for the most recent version of ElasticSearch).
3. `brew install elasticsearch`
4. `brew install mongodb`
5. Install meteor.js - `curl https://install.meteor.com/ | sh`
6. Start elasticsearch (see Elastic Search docs for details)
7. Start mongodb (see mongodb docs for details)
8. To start the chat app, go into the "gws-emulator\server" sub-directory and run `node server.js`
9. To start the scheduler app, go into the "scheduler" sub-direcotry and run `node server.js`
10. To start the meteor app, go into the "Tech_Support_Monitor" sub-directory and run `./run.sh`
