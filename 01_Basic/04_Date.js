let mydate = new Date()

//console.log(mydate);

//console.log(mydate.toDateString())

//console.log(mydate.toLocaleString());

console.log(mydate.toLocaleString('default',{
    weekday:"long",
    month: "long",
    year:"numeric",
   day:"2-digit",
}) )
