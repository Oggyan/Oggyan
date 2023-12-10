let allproducts=[];

function getdata (){

    fetch("http://localhost:8000/products")
    .then((response)=> response.json())
    .then((products)=>{
        allproducts = products;
        displaydata(allproducts)
    })
    .catch((err)=>{
        console.log(err);
    })
    
}



function displaydata(products){
    document.getElementById("table").innerHTML="";
    
    products.forEach((product,index) => {
            
        let row = document.createElement("tr");
    
        let sr = document .createElement("td");
        sr.append(product.id);
        row .appendChild(sr);
    
        let name = document .createElement("td");
        name.append(product.name);
        row .appendChild(name);
    
        let price = document .createElement("td");
        price.append(product.price);
        row .appendChild(price);

        let quna= document.createElement("td");
        quna.append(product.quantity);
        row.appendChild(quna);
    
        let op = document .createElement("td");

        let updateIcon = document.createElement("i");
        updateIcon.className="icon-success fa-solid fa-file-pen ";
        updateIcon.addEventListener("click",()=>{
            getProduct(product.id);
        })

        let deleteIcon = document.createElement("i");
        deleteIcon.className =" icon-danger fa-solid fa-trash ";
        deleteIcon.addEventListener("click",()=>{
            deleteProducts(product.id);
        })

        op.append(updateIcon);
        op.append(deleteIcon);
        row .appendChild(op);
        
        document.getElementById("table").appendChild(row);
    
    });
}

getdata()


function deleteProducts(id){

    fetch("http://localhost:8000/products?id= "+id,{
        method : "DELETE"
    })
    .then((response)=> response.json())
    .then((message)=>{
        console.log("fetch id working");

        let conformation = confirm("Are you Sure, You want to delete the Product");
        
        if(conformation === true ){
            let index = allproducts.findIndex((product,index)=>{
                return Number(product.id) === Number(id)
            })

            allproducts.splice(index,1);

            displaydata(allproducts);
        }
})
    .catch((err)=>{
        console.log(err);
    })
}

function createProduct(){
    let product ={};

    product.id = document.getElementById("cr_id").value;
    product.name = document.getElementById("cr_name").value;
    product.price = document.getElementById("cr_price").value;
    product.quantity = document.getElementById("cr_quantity").value;

    // console.log(product)
    fetch("http://localhost:8000/products",{
        method :"POST",
        body:JSON.stringify(product),
        headers:{
            "Content-Type":"application/json"
        }
    })

    allproducts.push(product);
    displaydata(allproducts);

    closel("create_products");
}

function openl(modal){
    document.getElementById(modal).style.display= "flex";
  }
function closel(modal){
    document.getElementById(modal).style.display= "none";
  }


//   let UP_product;

function getProduct(id){
    let updateProduct = allproducts.find((product,index)=>{
        return Number(product.id) === Number(id);
    })

    // UP_product = updateProduct; 

    document.getElementById("up_id").value = updateProduct.id;
    document.getElementById("up_name").value = updateProduct.name;
    document.getElementById("up_price").value = updateProduct.price;
    document.getElementById("up_quantity").value = updateProduct.quantity ;

    openl("update_products");

}

// console.log(UP_product)

function UpdateProducts(){

    
    let product ={};

    product.id = document.getElementById("up_id").value;
    product.name = document.getElementById("up_name").value;
    product.price = document.getElementById("up_price").value;
    product.quantity = document.getElementById("up_quantity").value;

    fetch("http://localhost:8000/products?id="+"product.id",{
        method :"PUT",
        body:JSON.stringify(product)
    })

    allproducts.push(product);
    displaydata(allproducts);

    closel("update_products");
}