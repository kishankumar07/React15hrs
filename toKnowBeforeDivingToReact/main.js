// concept of logical operators , if both are true then return true
// if one is false definitely completely false. 
//if first one is false, it will immediately return false does not check for the second one.

// 1)
let a = true;
let b = true;
console.log(a && b);

// 2)
let c = true;
let d = false;
console.log(c&&d)

// 3)
let e = false;
let f = true;
console.log( e && f)

// 4)
function getFunction(name){
    return name;
}
let g  = true;
console.log(a && getFunction('Kishan'))

// 5)  Now what if it was false * function getFunction("Kishan");

// Well that was with logical and operator
//----------------------------------------------------------------------------
// Lets dive into logical or operator
let h = true;let i = false;
console.log(i || h);
// eventhough first one is false, the logical OR || will check for 2nd one
// 6) 
console.log(i || getFunction('Kishan Kumar'))

//------------------------------------------------------------------------------
//Template Literals

let name1 = 'Holy';
let name2 = 'Grace';
console.log(name1 + ' ' + name2, `${name1} ${name2}`)

console.log('Now lets dive into destructuring')
//-------------------------------------------------------------------------------------
// Object destructuring
let object = {id:1,name:'Kishan'};
let {id,name} = object;
console.log(id,name)

// Refer Rest parameter, spread operator, default parameter
// some,every,find,filter,findIndex,indexOf,includes












//fetch operation to get dummy products and rendering to html
let elemLists = document.querySelector('.list-of-elements');
 
async function fetchListOfProducts(){
    try{
        let apiResponse = await fetch('https://dummyjson.com/products',{
            method:'GET'
        });
        console.log('api response from the fetch operation :',apiResponse)
        let result =await apiResponse.json();
        console.log(result)

        //to get the title of each product use forEach
        function renderProductsAtHTML(products){
            elemLists.innerHTML = products.map((pro)=>{
                return `<p>${pro.title}</p>`
            }).join(' ')
        }

        result.products.forEach(pro => {
            console.log(pro.title)
        })

        if(result.products.length>0) renderProductsAtHTML(result.products)

    }catch(e){
        console.log('error while fetching products :',e)
    }
}


fetchListOfProducts()