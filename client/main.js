/*var HelloMessage ="hellomessage";
 console.log(HelloMessage);
HelloMessage = "hey alyssa";
console.log(HelloMessage);

var fruit = "apple";
var applenum = 3;
console.log(fruit);
console.log(applenum);

var 你是我的小老鼠 = 100 ;
console.log(你是我的小老鼠);

var mouse = 5, dog = 20;
var allanimals = mouse+dog;
console.log(allanimals);

var question = "where is your dog?", answer="No";
console.log(question+answer);

var numbermessage="totalnumber is   ", totalnumber= 10;
console.log(numbermessage+totalnumber);

var numberone=10, numbertwo=20;
console.log(numberone+numbertwo);

var person ="Darcy";
if (person ==="Darcy"  )
{
  console.log("helloooooooooooooooo");
}
else
{
  console.log ("you are not Darcy");
}

var IQ =180;
if(IQ>=180)
{
  console.log("u r so smart");
}
else
{
  console.log("me too");
}

var language = "taiwanese";
if(language==="English")
{
  console.log("hi");
}
else if (language === "taiwanese")
{
  console.log(""哩後"");
}
else
{
  console.log("con ni gi wa");
}


for(age=0; age<100; age++)
{
  if(age===0)
  {
    console.log("hello");
  }
  else if(age===25)
  {
    console.log("you r so beautiful");
  }
  else if(age===75)
  {
    console.log("it's time to go hell");
  }
}*/


var nameone = "jason", ageone = 18;
var nametwo =  "ben", agetwo = 40;

var agecomment = function(name, age)
{
  var msg;
  if(age <= 20 )
  {
  msg = name+", u r so young!";
  }
  else
   {
    msg = name+", u r an adult.";
  }
  return msg;
}

var comment = agecomment(nameone, ageone);
console.log(comment);
comment = agecomment(nametwo, agetwo);
console.log(comment);
