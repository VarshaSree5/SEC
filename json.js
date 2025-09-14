console.log("json basics");

let student={
    name:"asha",
    age:19,
    marks:[22,67,89]
};

let jsonString=JSON.stringify(student);
console.log("JSONSTRING:",jsonString);

let ParsedObj=JSON.parse(jsonString);
console.log("Parsed Object:",ParsedObj);


const jsonString = `{
  "books": [
    {
      "title": "Sunny Days",
      "author": "A. Sharma",
      "price": 9.99
    },
    {
      "title": "The Lost Key",
      "author": "R. Mehta",
      "price": 12.50
    },
    {
      "title": "Journey Home",
      "author": "K. Verma",
      "price": 8.75
    }
  ]
}`;

const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);