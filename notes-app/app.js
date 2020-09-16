//File system module must be defined by loading it with require
// for all node values there is typically a variable for the modules this is for ease of use

// const fs = require('fs');


// fs.writeFileSync('notes.txt','My Name is Luis.');

// //Challenge:
// if(fs.existsSync('notes.txt')){
//     fs.appendFileSync("notes.txt"," \n This is the solution to the node js challenge #1")
// }

//We need to divide the code in sections so we have multiple files
//This is for defining function

const yargs = require('yargs')
const notes = require('./notes.js')
const log = console.log
yargs.version('1.1.0')
// This will be our command
// comands will be add, remove.. maybe update


//title and body
yargs.command({
    command:'add',
    describe:'Add a new Note',
    builder: {
        title:{ describe: "Note Title",
                demandOption:true,
                type: 'string'
            },

        body: { describe: "Body of The Note",
                demandOption:true,
                type: 'string'
            }
    },
    handler:(argv)=>{ 
        
        notes.addNotes(argv.title,argv.body)
    }
})
//Create remove command
//neds title
yargs.command({
    command:'remove',
    describe:' remove a  Note',
    builder: {
        title:{
            describe: "Note title",
            demandOption: true,
            type:"string"
        }
    },
    handler:(argv)=>{ 
        notes.removeNotes(argv.title)}
})
yargs.command({
    command:'list',
    describe:' lists all  Notes taken',
    handler: ()=>{ 
        notes.getNotes()}
})
yargs.command({
    command:'read',
    describe:' Reads a note',
    builder: {
        title:{
            describe: "Note title",
            demandOption: true,
            type:"string"
        }
    },
    handler: (argv)=>{ 
        notes.readNote(argv.title)}
})

yargs.parse()