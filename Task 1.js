 let a=5

if (a>0 && a%2==0){
    console.log("Positive and Even Number")

}
else if (a>0 && a%2!=0){
    console.log("Positive and Odd Number")
}
else if (a<0 && a%2==0){
    console.log("Negative and Even Number")
}
else if (a<0 && a%2!=0){
    console.log("Negative and Odd Number")
}
else if (a==0){
    console.log("It is a Zero")
}
else{
    console.log("Invalid Number")
}