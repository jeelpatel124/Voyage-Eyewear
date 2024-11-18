
fetch(`https://render-p29x.onrender.com/product`)
.then((res)=>{
    return res.json()
})
.then((Res)=>{
    console.log(Res);
    
    document.getElementById("pro-sec-1").innerHTML = proview(Res)
    op1(Res)    

})
.catch((Err)=>{
    console.log(Err);
})

function proview(arr){
    return arr.map((el)=>{
        return `<div id="pro-card-1">  

        <div id="cardimg"> 
            <a href="singalproduct.html?id=${el.id}"> <img src="${el.img}" id="cardpro"/> </a>
        </div>
        

        <div id="proinfo"> 

        <div id="details">
            <p id="protitle">${el.title}</p><br>

            <span id="proprice">₹${el.price}</span>&nbsp &nbsp &nbsp 
            <span id="off">₹${el.offprice}</span><br>
            
        
            
            <span id="dis">Save Rs.${el.discount}</span>
            <span id="emi">Rs.${el.EMI}/Month</span>
            
          <span> <img id="img2" src="${el.img2}">Buy On EMI></span>
      
        </div>


               
        
        </div>

 </div> </a>`
    }).join("")
}


/// uder 1100
// 
function op1(arr) {
  
    let opt1 = document.getElementById("chin")
    opt1.addEventListener("change", () => {
  
        let compare= opt1.value
        console.log(compare);
        
  
        if(compare== 'upp'){
            let anss = arr.filter((el) => {
                return el.price < 1100
            })
    
            document.getElementById("pro-sec-1").innerHTML = proview(anss)  
        }
  
        if(compare== 'upp1'){
            let anss = arr.filter((el) => {
                return el.price < 1500
            })
    
            document.getElementById("pro-sec-1").innerHTML = proview(anss)  
        }
        if(compare== 'upp2'){
            let anss = arr.filter((el) => {
                return el.price > 1100 && el.price < 1500
            })
    
            document.getElementById("pro-sec-1").innerHTML = proview(anss)  
        }
    })



 

}

  