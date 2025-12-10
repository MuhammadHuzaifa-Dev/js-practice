// Immediately Invoked Function Expressions (IIFE)

(function vosprin() {
    //named IIFE
    console.log(`DB Connected`);
})();

((NAME) => {
    console.log(`DB Connected to ${NAME}`);
})("vosprin")