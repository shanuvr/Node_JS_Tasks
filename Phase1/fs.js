import fs from 'fs'

fs.readFile('./doc1.txt', (err,data)=>{
   if(err){
    console.log(err);
    
   }
  console.log(data.toString());
  
})

fs.writeFile('/doc.txt','world hello',()=>{
    console.log('file was written');
    
})

fs.mkdir('./assets',(err)=>{
    if(err){
        console.log(err);
        
    }
    console.log("folder created");
    
})
fs.unlink('./doc.txt',(err)=>{
    if(err){
        console.log(err);
        
    }
    console.log("deleted");
    
    
})


fs.readFile('./doc1.txt',(err,data)=>{
    if(err){
        console.log(err);
        
    }
    fs.appendFile('./doc2.txt',data,(err)=>{
        console.log(err);
        
    })
    console.log('data transfered');
    
})