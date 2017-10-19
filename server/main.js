var msgRecords = new Mongo.Collection("msgRecords");

Meteor.methods
(
  {
    msgReceiver:function(msg)
    {
      console.log("Method called");
      var msgTime = new Date();
      msgRecords.insert
      (
        {
          spearker: "You",
          msg: msg,
          time:msgTime
        }
      );
      var allMsgs = msgrecords. find({});
      allMsgs = allMsgs.fetch();
      console.log(allMsgs);
      return;
    } ,
    resetELIZA: function()
    {
      msgRecords.remove({});
      return;
    }
   }
);


/*msgRecords.update
(
  {
    speaker: "Shari"
  },
  {
    $set:{msg: "hello dog"}
  },
  {
    multi:true
  }
);*/

/*msgRecords.remove({});

var msgTime = new Date();

msgRecords.insert
(
  {
    speaker: "Shari",
    msg: "I hate u guys",
    time: msgTime
  }
);

msgRecords.insert
(
  {
    speaker:"Shari",
  msg:"Hello dog",
  time:msgtime
}
);

msgRecords.remove

var allMsgs = msgRecords.find
(
  {
    speaker: "Shari"
  }
);
allMsgs = allMsgs.fetch();
console.log(allMsgs);*/




/*var msgTime = new Date();
console.log(msgTime);

msgRecords.insert
(
  {
    speaker: "Shari",
    msg: "I hate u guys",
    time: msgTime
  }
);

var allMsgs = msgRecords.find
(
  {
    speaker: "shari"
  }
);
console.log(allMsgs.fetch());
allMsgs = allMsgs.fetch();
console.log(allMsgs);*/



/*var myfirstbike=
{
  brand: "giant",
  when:1993,
  color:"red",
  price:5500,
  stolenyears:[1995, 2000, 2004]
};
console.log(myfirstbike. brand);
console.log(myfirstbike. stolenyears[0]);

myfirstbike.brand = "merida";
console.log(myfirstbike. brand);

myfirstbike.stolenyears[0]=1998;
console.log(myfirstbike. stolenyears[0]);


var emptyobject = {};*/





/*var numbers = [18, 356, 27, 3, 40];
            // 0  1  2  3  4
//var length = numbers.length;
//console.log(length);



for(pos = 0 ; pos <= numbers.length ; pos++)
{
  if (numbers[pos]<=30)
  {
  var result = numbers[pos]*numbers[pos];
  var MSG = numbers[pos]+"to the power of 2 is" +result;
    console.log(MSG);
  }
}*/



/*var position = numbers.indexOf(4);
console.log(position);


numbers = numbers.slice(1,3);
console.log(numbers);

 console.log(numbers[0]);
 console.log(numbers[5]);

numbers[3] = 10;
console.log(numbers[3]);

numbers.push(70);
console.log(numbers[5]);

number.pop();
console.log(number[5]);8?*/
