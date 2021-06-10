const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP


const {

    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList, 
    GraphQLInt,
    GraphQLNonNull


} = require('graphql')

const app = express()



// const authors = [
//     {id: 1, name: 'J. K. Rowling'},
//     {id: 2, name: 'J. R. R. Tolkien'},
//     {id: 3, name: 'Brent Weeks' }
// ]



// const books = [
//     {id: 1, name: 'Harry Potter and the Chamber of Secrets', authorId: 1 },
//     {id: 2, name: 'Harry Potter and the Prisoner of Azakaban', authorId: 1 },
//     {id: 3, name: 'Harry Potter and the Goblet of Fire', authorId: 1 },
//     {id: 4, name: 'Harry Potter and the Ring', authorId: 2 },
//     {id: 5, name: 'Harry Potter and the Two Towers', authorId: 2 },
//     {id: 6, name: 'Harry Potter and the Return of the King', authorId: 2 },
//     {id: 7, name: 'Harry Potter and the Way of the Shadows', authorId: 3 },
//     {id: 8, name: 'Harry Potter and beyond the Shadow', authorId: 3},


// ]
















// const schema = new GraphQLSchema ({

//     query: new GraphQLObjectType({
//         name: 'HelloWorld',
//         fields: () => ({

//             message: { 
                
//                 type: GraphQLString,
//                 resolve: () => 'Hello World'
            
            
            
            
            
//             }




//         })
//     })
// })


const BookType = new GraphQLObjectType({
    name: 'Book', 
    description: 'This represents a book written by author',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString)},
        authorId: { type: GraphQLNonNull(GraphQLInt)}
    })
})


const RootQueryType = new GraphQLObjectType({
    name: 'Query', 
    description: 'Root Query', 
    fields: () => ({
        books: {

            type: BookType,
            description: 'List of All books', 
            resolve: () => books 
        }
    })

})



const schema = new GraphQLSchema({

    query: RootQueryType




})






app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))

app.listen(5000, () => console.log('Server is running'))