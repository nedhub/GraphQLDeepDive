const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');

const app = express();


app.use('/graphql', graphqlHTTP({

    schema: schema, // we initialize the schema here

    graphiql: true, // we want to use the graphiql tool in the browser


}));

app.listen(4000, () => {
    console.log("now listening for requests on port 4000")
})