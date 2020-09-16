//Notes App Functions
const fs = require('fs')
const chalk = require('chalk');
const { title } = require('process');

const addNotes= function(title, body){
   const notes = loadNotes()
   
   const duplicateNotes = notes.filter(note => note.title === title)

    // We have two types of errors, logic errors and class errors
    //Tools for debugging, 1) Console.log... this is a print state
    //We use it to dump a value and then just check if everything is ok.
    //2)The bugger using the word, debugger
    //debugger //with this in place

   if(duplicateNotes.length == 0){
        console.log("Adding a new Note...")
        notes.push({title: title,
        body: body})
        saveNotes(notes)

   }else{
       console.log("Note title has been taken")
   }
   
  
};
const removeNotes = (title) =>{
    const notes = loadNotes()
    const notesNotRemoved = notes.filter(note => note.title != title)
    if(notes.length ===0){
        console.log("No Elements to remove")
    }
    else if(notes.length === notesNotRemoved.length){

        console.log(chalk.red.inverse('Note with Title: ' +title +'  NOT FOUND'))

    }else{

        console.log(chalk.green.inverse('Note with Title: ' +title +' REMOVED '))
        saveNotes(notesNotRemoved)
    }
   
}
const getNotes =()=>{
    const notes = loadNotes()
    notes.forEach(note => console.log(chalk.blue("Title: "+ note.title )+chalk.inverse.cyan("\n"+ note.body)))
}

const readNote= (title)=>{
    const notes = loadNotes()
    const noteToRead = notes.filter(note => note.title === title)
    if(noteToRead.length === 0){
        console.log(chalk.red.inverse("Note NOT FOUND"))
        return '';
    }
    console.log(chalk.cyan.inverse(noteToRead[0].body))

    

}
const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes= ()=>{
    try{
    const buffer = fs.readFileSync('notes.json')
    const data = JSON.parse(buffer.toString())
    return data
    } catch(e){
        return []
    }
    
}

module.exports = {
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    readNote:readNote
};
