function simpleGreeting(name, greeting="Hello"){
    return `${greeting}... ${name}`
}

document.write(simpleGreeting("Bob"));
document.write(simpleGreeting("Charlie", "Hi"));

function simpleGreeting2(){
    document.write("Hello Alice!");
}

setTimeout(simpleGreeting2, 5000);

setTimeout(function(){document.write("Hello Damien")} ,5000);

setTimeout(() => {document.write("Hello Emmett")}, 5000);

setTimeout(() => document.write("Hello Fitzgerald"), 5000);
