# Patrick's Senior Enrichment Project

```bash
$ git clone DIR && cd DIR
$ npm install
$ createdb senior-enrichment # requires postgresql to be setup.
$ npm run seed 
# mind the ouput, the seed script makes requests that might fail, you may need to run it twice depending on the remote server.
$ npm start
```

The server/app can be found @ http://localhost:1337/ after startup.