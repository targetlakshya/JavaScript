// Imeediately Invoked Function Expressions (IIFE)  --> GLobal Scope k pollution se kayi baar hme problems hoti hai jaise ki woh function baar baar call krna isliye hum IIFE ka use krte hai

(function chai() {
    // Name IIFE
    console.log('DB connceted');
})();
// ; it is mandatoitory

( (name) =>  {
    // Unnamed IIFE
    console.log(`DB Connected to ${name}`)
})('Lakshya');