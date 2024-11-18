fetch(`https://render-p29x.onrender.com/addcart`)
    .then((res)=>{
        return res.json()
    })
    .then((Res)=>{
        console.log(Res.length);

        var cartlength = Res.length

        document.getElementById("cartnum").innerHTML = cartlength

        document.querySelector("#additem").innerHTML = view(Res)
    })
    .catch((Err)=>{console.log(Err)})


function view(arr){
    let subtotle = 0
   return arr.map((el)=>{
    subtotle = el.price * el.quantity
    return `
    <div class="lg:w-[100%] p-[10px] grid lg:grid lg:grid-cols-6 grid-cols-1 lg:gap-12 gap-4 lg:block border ">
    <div class="flex justify-center items-center">
        <img src="${el.img}" alt="" id="cartimg">
    </div>
    <div class="flex justify-center items-center">
        <p class="text-[16px] text-[#000]">${el.title}</p>
    </div>
    <div class="flex justify-center items-center">
        <p class="text-[16px] text-[#000]">${el.price}</p>
    </div>
    <div class="flex justify-center items-center">
        <button id="inc_btn1" onclick="inc_dc(${el.quantity},${el.id},'dc')">-</button>
        <input type="text" value="${el.quantity}" disabled id="qnt">
        <button id="inc_btn2" onclick="inc_dc(${el.quantity},${el.id},'inc')">+</button>
    </div>
    <div class="flex justify-center items-center">
        <p class="text-[16px] text-[#000] font-black " id="h">${subtotle}</p>
    </div>
    <div class="flex justify-center items-center">
        <p class="text-[16px] text-[#000] font-black"><button id="delet" onclick=" dd(${el.id})">Delete</button></p>
    </div>
    </div> 
    

    `
}).join("")
}

view()

function dd(id) {
    fetch(`https://render-p29x.onrender.com/addcart/${id}`, {
        method: "DELETE",
    })
        .then((res) => {
            return res.json()
        }).then((Res) => {
            // console.log(Res);
            document.querySelector("#additem").innerHTML = ""
        }).catch((err) => {
            console.log(err);
        })

}

function inc_dc(qtt, id, opr) {

    var h = qtt

    if (opr == 'dc') {

        h = h - 1;

        if (h == 0) {
            fetch(`https://render-p29x.onrender.com/addcart/${id}`, {
                method: "DELETE",
            })
                .then((res) => {
                    return res.json()
                }).then((Res) => {
                    document.querySelector("#additem").innerHTML = ""
                    // console.log(Res);
                }).catch((err) => {
                    console.log(err);
                })
        }
    }
    else if (opr == 'inc') {
        h = h + 1;
    }
    fetch(`https://render-p29x.onrender.com/addcart/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ quantity : h })
    })
        .then((res) => {
            return res.json()
        }).then((Res) => {
            console.log(Res);
        }).catch((err) => {
            console.log(err);
        })

    }