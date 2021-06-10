const graphql = require('graphql');
const _=require('lodash');



const { 
    GraphQLObjectType,
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,


} = graphql;



// dummy data structure

var books = [
    {name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1'},
    {name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2'},
    {name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3'},
];
// for everything or object you want to use in graphql you have to obtain it from the graphql library


var authors = [
    {name: 'Patrick Rothfuss', age:44, id: '1'},
    {name: 'Brandon Sanderson', age:42, id: '2'},
    {name: 'Terry Pratchett', age:66, id: '3'},




]

const BookType = new GraphQLObjectType({
    name: 'book',
    fields: () => ({
        id: {type: GraphQLID },
        name: { type: GraphQLString},
        genre: { type: GraphQLString },
        author: { 
            
            type: AuthorType,
            resolve ()
        
        
        
        
        }

        // here we create or initialize the various types of data that we are requesting or getting from the graphql database

    })


});



const AuthorType = new GraphQLObjectType({
    name: 'author',
    fields: () => ({
        id: {type: GraphQLID },
        name: { type: GraphQLString},
        age: { type: GraphQLInt },

        // here we create or initialize the various types of data that we are requesting or getting from the graphql database

    })


});



const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: { 
        book: {

            type: BookType,
            args: { id: { type: GraphQLID}}, //this is the required id property that we are passing throught the query
            
            // for root query type we are to pass arguments of type Booktype as defined
            
            resolve(parent, args) {

                // args.id // id of the args property that we have initially declared.


                return _.find(books, { id: args.id });


            } // the resolve function is the function where we write code to retrieve data or information from our database or from some other source.


        },


        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID }}, //this is the required id property that we are passing throught the query


            resolve(parent, args) {
                return _.find(authors, { id: args.id});

            }




        }
    }
});


module.exports = new GraphQLSchema({

    query: RootQuery // we are using the Root query that we have defined initally as our query export



})


// book (id: '123') {

// }












// our schema describes the object types and their relations on the graphs