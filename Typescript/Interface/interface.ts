interface Person{
    firstname:string;
    lastname:string;
    age: number;
    isMale?: boolean;
}

const person: Person = {
    firstname: "Hans",
    lastname: "Müller",
    age: 70,
}

function printName(person:any){
    console.log(person.age);
}

printName(person );