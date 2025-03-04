import fs from  'fs/promises'

let b =fs.writeFile("kartik2.txt", "hi, it is promise")

b.then(()=>console.log('done')
).catch(err=>console.log(err)
)


// fs.writeFile() does not return any value when successful.
// In your .then(res => console.log(res)), res will always be undefined.

let a = fs.readFile('kartik2.txt', 'utf-8')  
// 'utf-8', Node.js automatically converts it to a readable string.

a.then(data=>console.log(data))
.catch(err=>console.log(err))
