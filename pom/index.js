const rohan=require('rohan-node');
rohan()
.then(res=>{
    console.log(res)
})
.catch(err=> console.log(err))