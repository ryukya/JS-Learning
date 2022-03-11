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