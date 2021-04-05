var fs=require('fs');
fs.open('file1.txt','w',function(err){
    if(err)throw err;
    console.log('file opened for writing');
});
fs.writeFile('file1.txt','hello we are here',function(err){
    if(err)throw err;
    console.log('File Saved');
});