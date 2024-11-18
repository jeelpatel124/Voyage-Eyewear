function FetchingData() {
    let data = new URLSearchParams(window.location.search)
    let id = data.get("id")
    
    
    fetch(`https://render-p29x.onrender.com/product?id=${id}`)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                document.querySelector("#single_product_sec_1").innerHTML = view(res)
    
                document.getElementById("add").addEventListener("click", () => {
                    addToCart(res)
                })
    
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    
    FetchingData()
    
    function addToCart(res) {
        fetch(`https://render-p29x.onrender.com/addcart?id=${res[0].id}`)
           
        .then((res) => {
                return res.json()
            })
            .then((Res) => {
    
                console.log(Res);
                
                 if (Res.length > 0) {
                  
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "This Item Is Already Present!",
    
                        html: `
                        Go to This Page
                        <a href="" autofocus   style="text-decoration: underline; color: blue;">Lets Check</a>,
                        `,
                      });
    
    
                } else {
                    fetch(`http://localhost:3000/addcart`,{
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify({...res[0],quantity : 1})
                    })
                        .then((Res) => {
                            return Res.json()
                        })
                        .then((Res) => {
                            console.log(Res)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    
    }
    
    
    
    
    function view(arr) {
    
        return arr.map((el) => {
            return `
            <div id="main">
                <div id="card">
                  
                    <center>  <img src ="${el.img}"/> </center>
              </div>            
                  <div id="prodetails">
                  
                      <p id="title">${el.title}</p>
                      <div class="flex ">
                      <p id="price" class="me-[15px] text-[20px]">₹ ${el.price}</p>
                      <p id="offer" class="me-[15px] text-[20px]">${el.offprice}</p>
                      <p id="" class="text-[20px]">Save Rs.${el.discount}</p>
                    </div>
                      <p>(Incl. of all taxes)</p> 
                      <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></p>
                     <br>
                     <img id="gif" src="Assets/mob+product+3.gif" alt="">
                      <p id="pp"><i class="ri-price-tag-3-fill" id="detailIcon"></i> Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</p>
                      <p id="pp"><i class="ri-price-tag-3-fill" id="detailIcon"></i> Special PriceGet extra 80% off (price inclusive of cashback/coupon)T&C</p>
                      <p id="pp"><i class="ri-price-tag-3-fill" id="detailIcon"></i> Partner OfferMake a purchase and enjoy a surprise cashback/ coupon that you can redeem later!Know More</p>
                      <p id="pp"><i class="ri-calendar-check-fill" id="detailIcon"></i> No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999T&C </p>
      
      
                      
          
          <center> <button id="add"> <i class="ri-shopping-cart-2-line"></i> Add to Cart</button></a> </center>
          </div>
          </div>
        `
    }).join("")

}

