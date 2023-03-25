/*
var listItems = document.querySelectorAll('.list li');
var div= document.querySelector("#content");
var btn= document.querySelector('#addToCart');
var total= 0;

listItems.forEach(function(item){// this function must take aparameter
    item.onclick = function( ){ // this function take no parameter
        div.innerHTML += item.textContent +" ";

        total += parseInt(item.getAttribute("price"));
        console.log(total)

        if(div.innerHTML != '')
        {
            btn.style.display ="block"; 
        }
    }
})
*/
/*Srting *******************************/
/*var str="hello word js"

var r= str.split(" "); //يفصل ما بين الفراغ و الفراغ
var re=str.slice(0,2);//ياخذ مقتطع من ال مكان الرقم الاول حتى قبل الرقم الثاني
var res= str.toUpperCase();// toLowerCase
var resu =str.trim//لتجاهل المسافات قبل و بعد النص
var resul= str.indexOf("word")//برجعلك من اين بدا الكلمه المبحوث عنها و اذا كانت القيمه المرتجعه سالب واحد فيعني انها ليست موجوده
*/



// Array **********************8
/*
var arr=[ahmad,yaseer,mohamad];
var c=[amjad, salah];
var r=arr.join(0);//بتحول الارري الى سترينج
var re=arr.pop();//يحمل اخر عنصر بالارري
var res= arr.puch("test")//يضع في اخر العنصر
var resu=arr.shift();//تحمل او عنصر بالارري
var resul=arr.unshift("test");//تضيف العنصر باول الارري
var result=arr.length;
var result1=arr.concat(c);//يعمل اضافه ارري الى ارري
var result2=arr.slice(0,2)// and (1)يبدا بعد العنصر الاول حتى النهايه
*/


//math *********************************
/*
console.log(Math.round(2.3));التقريب
console.log(Math.pow(2 ,3));
console.log(Math.sqrt(25));//الجذر
console.log(Math.ceil(2.3));//يقرب لاقرب رقم صحيح اعلى من الرقم الموجود
console.log(Math.floor(2.3));//يقرب لاقرب رقم صحيح اقل من الرقم الموجود
console.log(Math.random());//رقم عشوائي من الصفر الى الواحد
console.log(Math.round(2.3));
*/


//AJAX******************************888
/*function loadData(){
    var xhttp= new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        console.log(this.readyState);

        if(this.readyState==4 && this.status==200){//readyState [1,2,3,4] مراحل طلب المعلومات & status: 200:ok , 404:page not found
            console.log(this.responseText);
        }
    };
    // true & false : Asynchronous   استنى لا & synchronous استنى 
    xhttp.open("GET","https://jsonplaceholder.typicode.com", true);
    xhttp.send();
}
loadData();
*/

/*
// Objects طرق كتابتها و الاضافه و جلب المعلومات
// use object literals
var car ={
    name= "BMW"
    year="1999"
};
//car.name || car["name"] طريقه مناداتها

//use new Object
var student= new Object();
student.name="Ahmed";
stusend.age="22";
//car.name || car["name"] طريقه مناداتها

//use object.create
var book = Object.create(car, {  // car:او اي شي بس عشان يعرف انه object
    auther:{
        value:"Ameer"
    }
});
*/

/*
//DOM **** document بتتعامل من خلالها بصفحه ال html من حيث اضافه مسح وووو
//Document
document.documentElement;// بتنادي ال html
document.all// بتنادي كل التاجات الي عندي بالصفحه all[3]

//getelementbyid . innertext بتجيب الكلام . textContent بتجيب الكلام الظاهر و المخفي . style
// getElementsByClassName
var s=document.getElementsByClassName("desk");
s[1].getAttribute["class"];
s[1].setAttribute("desc","ay7aga");
//getElementsByTagName
//quaerySelector  ("name=value") (#id) (.class) ("p")لاكنه في هده الحاله بجيب اول عنصر فقط
//quaerySelectorAll   بجيب كل العناصر من النوع المطلوب
 */


//parentElement children firstChildElement lastChildElement
//nextElementSipling lastElementSipling 

/*
//Creating*********************************
var mydiv= document.querySelector("div");
//consol.dir(mydiv); نشوف اش ال اتربيوت الي معرفه فيه يعني الي بنقدر نستخدمها
mydiv.setAttribute("id","myid");***** mydiv.id("myid"); 
mydiv.setAttribute("class","myclass");***** mydiv.className("myclass");

var text= document.createTextNode("Hello Js");
mydiv.appendChild(text); لادخال نص اليه

var ct = document.querySelector(".container");
var myspan=document.querySelector("#desc");
ct.insertBefore(mydiv, myspan); لوضعه في المكان الي بدنا اياه
*/


/*
addEventListner


Dom Events
-click
-dblclick
-mousedown
-mouseup
-mouseenter
-mouseleave
-mouseover
-mouseout
-mousemove
-keydown
-keyup
-keypress
-focus
-blur
-cut
-paste
-input
-change
-input
-submit
*/
/*
function test(event){// event or Ae 7aga بنطبعها بالكونسول و فيها شويه حاجات بنقدر نستخدمها
    event.preventDefoult();//بتمنع الشي الي بصير بالعادهسشضثصق
    console.loge("Hello")
};
test();// بنادي على الفنكشن مع الاقواس 
var btn= document.querySelector(".btn");
btn.onclick = test;//fkh]di f],k hr,hs ghki vdtdvks

//btn.addEventListener("name of event", function);
btn.addEventListener("click",test);
*/

//BOM*************************************
/*
/*
    window.prompt("title")
          .open("link","title","width=? ; height=?")  
          .close
          .innerWidth,innerheight
          


var x= window.confirm("do you want to contenue");
if (x){// x== true or false

}
else{

}

let popup;//تعريف متغير جلوبل مش محدد

function openWindow(){
    popup=window.open("https://www.w3schools.com","","width=300 ; height=300")
};
function closeWindow(){
    popup.close()
};
document.querySelector("open").addEventListener("click",openWindow);
document.querySelector("close").addEventListener("click",closeWindow);
*/

 /*
    screen.width
    screen.availableWidth
    نفس الشي لانه ما فيها اشي يتنقص من الشاشه مثل التاسك بار الي بتنقص من الهاي
    screen.height
    screen.availableHeight--منها بنقص التاسك بار
 
 */

/*
    location.reload
    *
    *
    * 
*/

/*
    history.back()
    history.forword()
    زي السهمين الي بالبراوزر الي فوق للرجوع و للامام
*/

/*
    navigator.appNmae
             .appCodeName
             .plateForme
             .appversion
             .language
             .online

*/

/*
    settimeout(function, 1000)  every 1000=1 sec
    setInterval(function, 1000)
    clearinterval(referance);
*/
// Arrow Function ***********
// () => {}

//Spread Operator ...   ************** تفرد العناصر الي جوا الاوبجكت او الارري

/*
// destraction******************
const data = [1,2,3];
const [n1,n2,n3] = data;

const data2={
    x:2,
    z:"hamza"
}
const {x , z } = data2
const {x , z : name } = data2
consol.log(x,name)//لاعادة تسميه المتغير
const {x , z , y="test"} = data2
*/

/*
// instade of using concatination
`
<div>
    <span>${1*2}</span>
</div>
`
*/

//This*******************************
/*
 -this in a function return to window
 -this in the window return to it 
 -this in a method in the object return to the object
 -this in the event return to what the event return to
 -var person1 ={

    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
 };

 var person2 ={
    firstName:"john",
    lastName: "Doe"
 }
 person1.fullName.call(person2);//بتخلي ذيس في ال بيرسون واحد تعود على ثنين

 -const youtubeChanle() = {
    title:"uniqe coders" ,
    tags:['js' , 'html'],
    returntitle(){
        console.log(this.title)//returns to youtubeChanle
    },

    returnEveryTags(){
        *1*var that = this;
        this.tags.forEach(function(tag){
            console.log(this)//في هذه الحالة لا تعود على الاوبجكت بل على الويندو, و يمكن نخليها ترجع عليه من خلال ثلاثه طرق ***
         *1*console.log(that)
        }, *2*this)//و بنخليها ثيس داخل الكونسول
    }
 };
*/


/*
//errors****************
try{
    function test(){
        console.log("test")
    }
    test()
}
catch(e){
    console.log(e.description)
}
*/

/*
//Strict mode***********تعمل على حمايه الكود
"use strict";
x=5;
console.log(x);//رح يعطيني خطا لانه تعريف المتغير بحمي الكود
*/


// Array helper method[map ,filter, ..............................................]
//Examples
/*
    --forEach
    |
    var arr=[1,2,3];
    arr.forEach(function({item,index,array}))  //takes three element
    |
    
    --map : syntax same as foreach 
    |
    var kvArray=[
        {key:1 , value:10}
        {key:1 , value:10}
        {key:1 , value:10}
    ];

    let reformattedArray = kvArray.map((obj) => {

        let rObj={};
        rObj[obj.key]= rObj[obj.value];
        return rObj;
    });
    |

    --filter : same as the later
    |
    const arr=[1,2,3,4,8];
    const evens = arr.filter((item) => item % 2 == 0)  //بعد السهم في return ولاكن بما انه سطر واحد ليس بحاجه لوضعها
    |
    
    --reduce ==> syntax: reduce(function(total , currentValue , currentIndex ,arr) , initialValue)
    |
    let arr =[[1,2],[3,4],[5,6]]
    arr.reduce(function(acc,cv){
        return acc.concat(cv);
    },[]);
    |
    let friends =[{
        name:'ana',
        books:['bible', 'hari potter'],
        age:21 
    },{
        name:'Ahmad',
        books:['war and peace', 'romio and juliet'],
        age:23
    },{
        name:'bob',
        books:['the lord of the rings','the shiny world'],
        age:33
    }];

    let allbooks = friends.reduce(function(acc , cv ){
        return [...acc , ...cv.books]
    } , ['Alphabet']);
    |

    --Some ==> syntax: arr.som(function(currentValue , index , arr) , thisValue)
    // it chick the arr if the condition is in , one item atleast
    |
    arr.som(function(item){
        return item<0 ;
    })
    |

    --every ==> same as some but this one is : all items should be achieve the goal

    --find ==> if it find one item it return the first element in an array
               and if it false it return undefind
               syntax: same ass some
    |            
    const arr =[ {id : "a"}, {id: "b"},{id: "c"}];
    const found = arr.find(function (item){
        return item.id === "b"; 
    })
    |

    --findIndex ==> syntax: same as find , it return the index of the first element
    
    --Sort 
    |
    arr["b", "a","d","c"];
    arr.sort();
    arr.reverse();
    |
    arr[40,100,1,5,25,10]
    arr.sort(function(a, b){
        return a -b ;
    });

    arr.sort(function(a, b){
        return b - a ;
    });
*/


/*
//constructor function **********************************

function Lang (name){
    this.name = name ;
    this.sayHello = function (){
        console.log("hello");
    };
};

const per1 = new Lang("English");

// add delete , key==> to return the object in array , and finding the key by using for(key in object)

//add ==>  . or [""]
per1.name="jjj";
per1["name"]="jjj";

//delete ==> .delete

//key and finding it 
let newCar = Object.keys(car);

//finding keys 
for(let key in car){
    console.log(key , car[key]);
}

//&&
if("name" in car ){
    console,log("yes")
};
*/

// Abstract *************
// when we put in the class let instad of this when we make a function ==>then we cant deal with it outside the prakits

/*
// inheritance 

function Person (name){//(parent/super)
    this.name = name;
    this.details = function(){
        console.log(`his name is ${this.name}`)
    };
}

function Student(name ,age){//(child/sub)
    this.age = age;
    Person.call(this , name);// inheritance
}
*/

//get any property desciptor
//let desc = Object.getOwnPropertyDescriptor(object name , the property)

/*
//how to change properties
let a = {
    title:"java",
};

Object.defineProperty(a,title,{
    configurable: fslse , //--> if we can remove it or nah
    writable:false, // if we can change it value or nah
    enumerable:false//appear with the keys or hide
})
*/
/*
//add akey by the protoType instad of add it in the parent ,then the child will use it when he want
function Person (name){
    this.name = name;
    
}

Person.prototype.say = function(){
    console.log("say Hi")
}
*/

/*
// prototype member can be called inside the instance member
function Person (name){
    this.name = name;
    this.test= function(){
        console.log("say instance")
        this.say();
    }
}

Person.prototype.say = function(){
    this.test();
    console.log("say Hi")
}
*/

//Function constractor: .prototype
//obj:.__proto__

/*
// How to make the constructor inherit the prototype
function Animal(){}

Animal.prototype.walk = function(){
    console.log("yes")
};

function Cat (){}

Cat.prototype =Object.create(Animal.prototype);//inherit prototype and it will inherit the constructor for avoidng that

Cat.prototype.constructor = Cat ;// here we return the cat constructer insstad of ani,sl constructor
*/

/*
//problem in inherit
let canWalk ={
    walk:function (){
        console.log("can walk")
    }
}

let canSwim ={
    walk:function (){
        console.log("can walk")
    }
}

function Cat (name){
     this.name = name;
}
Object.assign(Cat.prototype, canWalk, canSwim);// if there is a repeat we do
here what we do 
function  mixin(obj , ...params){
    Object.assign(obj , ...params)
};  
*/

/*
//class & instance and static methods & private
class Student{
    static getNum(){
        console.log(); //static
    }

    constructor(name, age){//instance
        let _name= name; //praivate
        this.age=age;
    }
    info(){
        console.log(`name is:${this.name}  age is:${this.age} `);
    }
}
// we can deal with the private during setter an getter methods
*/

//inheritance in classes
class Person{
    static getNum(){
        console.log(); //static
    }

    constructor(name, age){//instance
        let _name= name; //praivate
        this.age=age;
    }
    info(){
        console.log(`name is:${this.name}  age is:${this.age} `);
    }
}

class Student extends Person{// inherit the methods 
    constructor (name,age){
        super(name ,age)//inherit the constructor
    }
}