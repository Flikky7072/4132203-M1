    //vanila
    document.getElementById("message1").innerHTML = "Hello World"
    //variable
    let a = 5;
    var b = "Hello"
    const x = 10;

    console.log(b);

    add(5,10);

    //function
    function add(aa,bb){
        let cc = aa + bb;
        console.log(cc);
        return cc;
    }

    let result = add(5,10);
    
    let add2 = function(aa,bb){
        let cc = aa + bb;
        console.log(cc);
    }
    //arrow function
    let add3 = (aa,bb) => {
        let cc = aa + bb;
        console.log(cc);
    }
    //array
    let arr = [1,"test",3.15,4,5]; //ปนกันได้หมด
    const car = [];
    car[0] = "Toyota";
    car[1] = "Honda";

    const friut = new Array("Apple","Banana","Cherry");

    console.log(car[1]);
   
    let colors = [[1,2,3],"red","green","blue"]
    console.log(colors);

    //array method                        //[0 1 2 3 push]
    //ลบตัวหน้า shift ลบตัวหลัง pop       //  shift      pop
    friut.push("Orange");
    console.log(friut)


    arr.map((item) => {
        console.log(item);
    });
    
    //object
    let person = {
        firstName : "John",
        lastName : "Wick",
        age: 40,
        child:["Ann","Billy"],
        fullname: function(){
            return this.firstName + " " + this.lastName;
        }
    };

    person.address = {
        street: "123 main St",
        city:"Japan",
    };
    console.log(person.fullname());

    //spread operator
    const arrCombine = [...car, ...friut];
    const arrCombine2 = [car,friut];
    console.log(arrCombine);
    console.log(arrCombine2);

    if (x==10){
        let c = "test";
        let b = "test2";
        console.log("a is equal to b")
    }
    //short term if else
    let e = x==10 ? "Yes" : "No";

