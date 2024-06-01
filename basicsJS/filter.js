const num = [1,2,3,4,5,6,7,8,9,10]

// //syntax
// variableName.filter(variableName => condition)

//single line 
const number = num.filter(num => num > 7)
// console.log(number)


const users = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      age: 28
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      age: 34
    },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      age: 22
    },
    {
      id: 4,
      name: "Diana Prince",
      email: "diana.prince@example.com",
      age: 30
    },
    {
      id: 5,
      name: "Evan Davis",
      email: "evan.davis@example.com",
      age: 25
    }
  ];
  
//   const userDetail = users.filter( (UD) => UD.name === "Evan Davis" )
  // let userDetail2 = users.filter( (UD) => UD.id === 3 )
  // userDetail2 = users.filter( (UD => UD.age >= 25) )

  // userDetail2 = users.filter( (UD => UD.age === 30 && UD.id === 4) )
//   console.log(userDetail);
  // console.log(userDetail2);
  
