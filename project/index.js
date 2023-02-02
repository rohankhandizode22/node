module.export = async function getPosts(){
    const axios = require("axios");
    let result;
    await axios.get("")
    .then((res)=>{
        result = res.data;
    })
    .catch(err=>{
        console.log(err)
    });
    return result;
}

// const rohan=require('rohan-node');
// rohan()
// .then(res=>{
//     console.log(res)
// })
// .catch(err=> console.log(err))