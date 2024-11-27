try{
    let myValue = 'hello try'
    console.log(myValue);
}
catch(error){
    console.log(error);
    console.log(`Error message ${error.message}`);
    console.log(`Error name ${error.name}`);
    console.log(`Error stack ${error.stack}`);
}
finally{
    console.log(`All time work!`);
}