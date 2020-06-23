//CHAPTER NO :21-25:



//Task#1:

/*
var  first_name =  prompt("Enter your first name");
var  last_name =  prompt("Enter your last name");
var full_name = alert(first_name+last_name);
*/



//Task#2:

/*
var mobile = prompt("Enter favourite moble phone model");
document.write("My favourite phone is : " +mobile+ " <br>Length of string: "  +mobile.length);
*/


//Task#3:

/*
var string = "Pakistani";
var index = string.indexOf("n");
document.write("String : " +string+ "<br> Index of \'n\' : " +index);
*/



//Task#4:

/*
var string = "Hello World";
var index = string.lastIndexOf("l");
document.write("String : " +string+ "<br> Index of \'l\' : " +index);
*/




//Task#5:

/*
var string = "Pakistani";
var index = string.charAt(3);
document.write("String : " +string+ "<br> Character of index 3 : " +index);
*/



//Task#6:

/*
var  first_name =  prompt("Enter your first name");
var  last_name =  prompt("Enter your last name");
var full_name = first_name.concat(last_name);
alert(full_name);
*/



//Task#7:


/*
var city = "Hyderabad";
var replace = city.replace("Hyderabad" , "Islamabad");
document.write("City : " +city+ "<br> After replacement : " +replace);
*/



//Task#8:

/*
var message = " Ali and Sami are best friends They play cricket and football together" ; 
var replace = message.replace(/and/g , "&");
document.write(message+ "<br> " +replace);
*/


//Task#9:

/*
var value = "472";
document.write("Value: " +value+ "<br> Type : " );
document.write( typeof("value") ,"<br>");
var value = 472;
document.write("Value: " +value+ "<br> Type : " );
document.write( typeof(value));
*/


//Task#10:

/*
var value = prompt("Enter a value");
alert(value.toUpperCase());
*/



//Task#11:

/*
var name = prompt("Please enter");
var nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
document.write("User input :  "+name+ "<br> title case : " + nameCapitalized);

*/




//Task#12:

/*
var num = 35.36;
num = num.toString();
var string = num.replace(".","");
document.write("Number : " +num+ "<br> Result : " +string);
*/




//Task#13

/*
var b = prompt("Enter an alphabet");
var a = b.charCodeAt(b);
if (a == 33 || a == 64 || a == 44 || a == 46 ){
	alert("Please enter a valid user name");
}
else{
	alert(b);
}
*/


//Task#14

/*
var A = ["cake","apple pie", "cookies", "chips", "patties"];
var B = prompt("Welcome to ABC Bakery. What do you want to orser sir/,ma\'maam?");
B = B.toLowerCase();

for (var i = 0; i < B.length; i++){
	
if(B === A[i]){
	
	document.write(B + " is avalaible at index " +i);
	break;
}
}

if (B != A[i]) {
	    document.write("We are sorry " + B + " is <b>not available</b> in our bakery");
}
*/


//Task 15:

/*
var num =['0','1','2','3','4','5','6','7','8','9'];
var capital_letter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var passward = prompt("Enter a Password");
pass = pass.charAt(0);

for(var i=0; i<=capital_letter.length; i++){
 if(passward === num[i]){
     alert("Password cannot begin with a number \n Please Enter a valid Password")
     break;
 }
 else if(passward <= '6'){
     alert("Password at least 6 character long")
     break;
 }
 else if(  pass!=capital_letter[i]){

     alert("Password Should contain Alphabet And Numbers");
     break;
 }
 }

//Task#16:
/*
var a = "unversity of karachi";
var spilt = a.split("");
for (var i = 0; i < spilt.length; i++)
document.write(spilt[i]+ "<br>");

*/


//Task#17:


/*
var a = prompt("Please Enter");
var b= a.slice(-1);
document.write("User input : " +a+ "<br> Last character of input : " +b);
*/


//Task#18:

/*
var c = "the";

var a ="The quick brown fox jumps over the lazy dog";
var b = a.toLowerCase();
b= b.split(" ");
var count = 0;
for(var i=0;i<b.length;i++)
{
	if( c=== b[i]){
		count++;
	}

}
document.write(a+ "<br> there are  " +count+ " occurance(s) of word " +c );


*/



//CHAPTER NO :26-30:


//Task#1:


/*
var a = prompt("enter a positive integer number");
 var round =Math.round(a);
 var floor =Math.floor(a);
 var ceil =Math.ceil(a)
 document.write("Number : " +a+ "<br> round of value : " +round+ "<br> floor value : " +floor+ "<br> ceil value : " +ceil);  
*/




//Task#2:


/*
var a = prompt("enter a negative integer number");
 var round =Math.round(a);
 var floor =Math.floor(a);
 var ceil =Math.ceil(a)
 document.write("Number : " +a+ "<br> round of value : " +round+ "<br> floor value : " +floor+ "<br> ceil value : " +ceil);  

*/



//Task#3:
/*
document.write("Absolute value of -4 is " + Math.abs(-4));  
*/



//Task#4:
/*
var random = Math.random(4); 
document.write("Random dice value : " + random ); 
*/


//Task#5:


/*
var random = Math.floor(Math.random() * 2) +1;

if( random === 1){
   document.write("1 <br> Random coin value : Heads");
 }else{
   document.write("2 <br> Random coin value : Tails");
}
*/


//Task#6:

/*
var random = Math.floor(Math.random() * 100) +1;
document.write(" random number between 1 and 100 : "+random);
*/

//Task#7:

/*
var a = prompt("enter your weight in kilogram");
a = parseFloat(a);
document.write("the weight of user is " +a+ " kilogram");
*/





//Task#8:

/*
var a = 9;
var b = prompt("Enter a Number");
var b=Math.floor(Math.random() * 10) +1;
if( a === b){
   document.write("Congrulation!");
 }else{
   document.write("Try again!");
}

*/



//CHAPTER NO :31-34:


//Task#1:

/*
var curDate=new Date();
document.write(curDate);
*/


//Task#2:
/*
function getmonth(monthnumber){
	var monthname=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthname[monthnumber];

}


var date = new Date();
var month = date.getMonth();
document.write("Current Month:  "+getmonth(month));

*/



//Task#3:
/*

function getday(daynumber){
	var dayname=["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return dayname[daynumber];

}


var date = new Date();
var day = date.getDay();
document.write("Today is "+getday(day));
*/





// Task 4:

/*
 var array = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
var date =  new Date();
 document.write(date)

 if (array[6]==="Sun" || array[5]==="Sat"){

    alert("It's Fun Day")
}
 else{
    alert("error")
 }

*/






// Task 5:

/*
var date = new Date();
var a = "Fifteen Days of The Month ";
var b = "Last days of the Month ";

if (date.getDate()<15){
document.write(a);
  }
 else{
    document.write(b);
 }

*/





// Task 6:

/*
var curr_Date = new Date();
var date = new Date("26 jan,1970")
var milisec = curr_Date.getTime();
var minute =milisec/(1000*60);

document.write("Current Date: "+curr_Date+"<br>"+"Elapsed Millisecond since January 1,1970:" +milisec+"<br>"+"Elapsed Minute since January 1,1970:"+minute);

*/



// Task 7:

/*
 var date = new Date();
 if(date.getHours()>12){
    alert("It's P.M");
 }
else{
    alert("It's A.M")
}
*/




// Task 8:

/*
var date = new Date("31 Dec, 2020");
document.write(date)
*/


// Task 9:

/*
var a = new Date ("1 jan,2015")
var b = new Date ("18 jun,2015");
var c = (b-a);
c = c/(1000*60*60*24)

document.write(c+" days have passed since 1st Ramadan,2015")
*/




// Task 10:

/*
var date = new Date("26 Dec 2015");
var date1 = new Date("1 jan, 2015");

var datemili =date.getTime();
var date1mili = date1.getTime();
var diff = (datemili-date1mili)
document.write("On Reference Date"+date+"<br>"+diff+" second had passed since beginning of 2015");
*/


// Task 11:

/*
var date = new Date();
var hour = curr_date.getHours();

var ago_Date = new Date();
ago_Date.setHours(hour-1)
document.write("Current Date:"+date+"<br>"+"1 hour Ago,it was"+ago_Date)

*/



//Task 12:

/*
var currdate = new Date();
var ago_Date = new Date("5 dec,1920");

 document.write("Current Date:"+currdate+"<br>"+"100 Years Back,it was "+ago_Date)
*/


// Task 13:

/*
 var dob = new Date(prompt("Enter Your Date of Birth"));
 var mili = dob.getTime();
 var today = new Date();
 var todaymili = today.getTime();
 var diff = (todaymili-mili);
 var accuage = Math.floor(diff/(1000*60*60*24*30*12))
 console.log(accuage);
 */


// Task 14:

/*
 var array = ["January","February","March","April","May","June","July","September","October","Novermber","Decemeber"]
 var cn = "ABC Customer";
 var date = new Date();
 var Month = array[date.getMonth()];
 var nou = 410;
 var cpu = 16;
 var lps = 350;

 document.write("Customer Name :"+cn+"<br>"+"Month :"+Month+"<br>"+"Number of Units :"+nou+"<br>"+"Charges per Unit :"+cpu+"<br><br><br>"+
"Net Amount Payable (With in Due Date) :"+(cpu*nou)+"<br>"+"Late Payment Surcharge :"+lps+"<br>"+"Gross Amount Payable (After Due Date):"+((cpu*nou)+lps));
*/


















//CHAPTER NO : 35-38







// Task 1

 function current_date(){
     var date = new Date();
     document.write(date);
 }

current_date();
*/



// Task 2:

/*
 function greet (a,b){
     alert("Welcome "+(a+" "+b));
 }

 greet('Rida','Faryal');
*/



// Task 3:

/*
 function add(a,b){
     return a+b;
 }

 document.write( add(2,4))

*/




// Task 4

/*
 function calculator (a,b,oper){
     switch(oper){
         case "+":
             return a+b;
             break
         case "-":
             return a-b;
             break

         case "*":
             return a*b;
             break;

         case "/":
             return a/b;
             break;

         case "%":
             return a%b;

         default:
             document.write("Invalid Operator")
     }
 }

document.write(calculator(1,2,"$"))
*/



// Task 5

/*
 function square (a){
     document.write(a*a);
 }

 square(8);

*/



// Task 6:

/*
 function factorial (n){
   var answer =1;

   if(n==0 || n==1 ){
       return answer;
   }
   else{
       for(var i=n; i>=1; i--){
           answer = answer *i;
       }
       return answer;
   }

 }

 document.write(factorial(5));
*/



// Task 7:

/*
 function count (num1,num2){
     for(i=num1; i<=num2; i++){
         document.write(i+"<br>");
     }
 }

 count(1,100);
*/




// Task 8:


/*
function hypothesis (num1,num2){
          var x=(num1*num1);
          var y=(num2*num2);

          var z=(x+y);
          document.write(z);
 }
 hypothesis(4,4)
*/





// Task 9:


/*
 function area (width, height){

     return (width*height);
 }

 var b = area(4,5);
document.write(b);

*/


// Task 10:


/*
 function palindrome (str){
     var check = "";
     i=str.length;
     for (var j =i-1; j>=0; j--){
         check += str.charAt(j);
         console.log(check+"<br>")
     }
     if(str === check){
         alert(str+" is palindrome word.")
     }
     else{
         alert("not a palindrome Word");
     }
 }

 palindrome("madam");

 */


// Task 11:

/* function cl (str){

     str = str.split(" ");
     x=str.length;
     for(var i=0; i<x; i++){
         str[i]= str[i][0].toUpperCase()+str[i].substr(1);
     }
    return str.join("");
 }

var str1 = cl("the quick brown fox");
 document.write(str1);

*/

// Task 12

/*
 function long_string(str){

     str = str.split(" ");
     var length=0;
     var longest;

     for(var i=0; i<str.length; i++){
         if(str[i].length>length){
             length = str [i].length;
             longest = str[i];
         }
     }
     alert(longest)

}

 long_string("Web Development Tutorial")
*/

// Task 13:

/*
 function ocuurences (str,word){
 word = word.toLowerCase();
 var str1 = str.toLowerCase();
str1 = str1.split(" ");
var count=0;
for (var i=0; i<str.length; i++){
     if(word===str[i]){
}
 document.write("Text:"+str+"<br>"+"There are "+count+ " occurrence(s) of the word "+ word )

 }

 ocuurences("JSResources.Com",'o');
*/




// Task 14:

/*
var pi = 3.14;

function circumference(radius){

document.write("The Circumference is :"+(2*pi*radius)+"<br>");
 }


function Area(radius){

document.write("The Area is :"+(pi*(radius*radius)));
 }

cumference(3);
Area(2);
*/