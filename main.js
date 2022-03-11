console.log(' JS and HTML now is connected');
var myCar = "New brand";
myCar = "not update";
console.log(myCar);


var newArray = ['Cat', 'Dog', 'Mouse'];
console.log("this is the array of 3 animals");
for (var i = 0; i < newArray.length; i++) {
    console.log(newArray[i]);
}

console.log("now this is var i:", i);

var newAray2 = [1, "Grace", 'quin', 3];
for (let y = 0; y < newAray2.length; y++) {
    console.log(newAray2[y]);
}
console.log("now this is let y", "which was causing error since it use let")
    //
    /*
    var Name= data=> this will be changed if there is update in next line
    var xx if used inside for(var i=0;i<...)=>  this var i will still recognized outside of for
    let xx will solve this problem so inside for use let
    const Name = data=> this will not be changed even if there is an update in the next line

    */
    //===========================================================
console.log('Congcat in ES6');
const user_place = document.getElementById('user');

const user_logged = "Gracia";
user_place.innerHTML = `Hi ${user_logged}, how are you today?`;
//=============================================
const cart_items = document.getElementById('cart');

function addProduct(name, category) {
    return {
        name,
        category
    }
}

var getProduct = addProduct("Rolex", "Watch");
cart_items.innerHTML = `Your product : ${getProduct.name} from ${getProduct.category} category `;
//================================================
const prodcutList_items = document.getElementById('productList');

const arrProduct = ['Indomie', 'Cake', 'Egg'];
arrProduct.push('Cheese');
let parent = '<ul>';

arrProduct.forEach((prod) => {
    parent += '<li>' + prod + '</li>';
    console.log(`${prod}`);

})
parent += '</ul>';
prodcutList_items.innerHTML = parent;
//========================================
// Map class and inheritance