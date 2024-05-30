const myObj ={
    userName: "Anish Shrestha",
    emailAddress: "anishshrestha669@gmail.com",
    address: "Pharping"
}

for(key in myObj){
    // console.log(`${key} of user is  ${myObj[key]}`)
}

// for array

const myarr = ["Anish Shrestha", "Kathmandu", "anishshrestha669@gmail.com"]

for(const arrayList in myarr){
    // console.log(myarr[arrayList])
}

for(arr of myarr){
    console.log(arr);
}