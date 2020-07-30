const greet = (first_name, last_name, message) => {
    console.log ("Hi " + first_name + " " + last_name);
    message(first_name);
}


const message = (name) => {
    console.log("Nice to see you again " + name +"!");
}

greet("Kayla", "Depatie", message);