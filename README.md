install dependence

   -- yarn install

start project

   -- yarn start

start docker-compose

   --  docker-compose up

config mongo 

   -- user : root
   -- password: nodmon
   --  port: 27017

endpoint : 

 -- book

    created book
        Method POST http://localhost:3000/book 
        body: 
        { 
            name : string
            author : string
            yearPublication : number
            editorial: string
            isbn:string
        }

    deleted book
        Method DELETE http://localhost:3000/book/{idbook} 

    update book
        Method PUT http://localhost:3000/book/{idbook}
        body: 
        { 
            name : string
            author: string
            yearPublication: number
            editorial: string
            isbn: string
        }

 -- library

    created library
        Method POST http://localhost:3000/library 
        body: 
        { 
            name: string
            creationDate : date
            state: string
        }

    deleted book
        Method DELETE http://localhost:3000/library/{idlibrary} 

    update book
        Method PUT http://localhost:3000/library/{idlibrary}
        body: 
        { 
            name: string
            creationDate: date
            state: string
        }

    add Book
        Method PUT http://localhost:3000/library/book/{idlibrary}
            body: 
            { 
                book: string = id book
            }

     findOne
        Method GET http://localhost:3000/library/{idlibrary}
    


    findAll
        Method GET http://localhost:3000/