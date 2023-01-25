import fs from "fs"

fs.appendFile("my-file.txt", "File created by Node js", (err) => {
    if (err) throw err
    console.log("File created!")
})


setTimeout(()=>console.log('Finish'),30000)