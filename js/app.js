// object literal

// const book1 = {
//   title: 'The way of Kings',
//   author: 'Brandon Sanderson',
//   year: 2002,
//   getSummary: function (){
//     return `${this.title} was written by ${this.author} in ${this.year}`
//   }
// }
// console.log(book1);
// console.log(book1.getSummary());

//OBJECT CONSTRUCTOR

// function book(title,author,year){
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   getSummary = function (){
//       return `${this.title} was written by ${this.author} in ${this.year}`
//     }
// }

// const book1 = new book('Winds of Winter','George RR Martin', 2055);
// const book2 = new book('Doors of Stone','Patrick Rothfuss', 2022);
// console.log(book1);
// console.log(Object.values(book2));

//Prototypes
// function book(title,author,year){
//   this.title = title;
//   this.author = author;
//   this.year = year;
//   }
//
//   function Author(name,nationality,dob){
//     this.name = name;
//     this.nationality = nationality;
//     this.dob = dob;
//   }
//   // adding prototypes to Object
//   book.prototype.getSummary = function (){
//     return`${this.title} was written by ${this.author} in ${this.year}`;
//   }
//   Object.prototype.logSomthing = function (){
//     console.log('something');
//     return 'something';
//   }
//  const book1 = new book('Goblet of Fire', 'JK Rowling', 2005);
//  const author1 = new Author('terry pratchett', 'Dark Shadow', 1990);
//  console.log(book1.getSummary());
//  console.log(author1.logSomething());


// Classes
class Car {
  constructor (make,model,year,color){
    this.make = make;
    this.model =model;
    this.year = year;
    this.color = color;


  }
  getSummary(){
    `${this.make} was made with ${this.model} in ${this.year} and is ${this.color}`;

  }
}
 const car1 = new Car('bmw', 'X5', 2010, 'black');
 console.log(car1.getSummary());
