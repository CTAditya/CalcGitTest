document.querySelector("#eq-btn").addEventListener("click", function() {
    // const result = document.querySelector(".calculator-result p");
    
    // // Example: Set the result value (Replace this with actual calculation logic)
    // result.textContent = "42"; // Change dynamically

    // // Remove the class to reset the animation
    // result.classList.remove("fade-in");

    // // Use a small delay to allow class removal to take effect
    // setTimeout(() => {
    //     result.classList.add("fade-in"); // Add the class back to restart animation
    // }, 10);

    const expression = document.querySelector(".calculator-expression p");
    expression.classList.remove("switch-in");
    // expression.textContent = "7x6";
     // Force reflow (trigger a repaint)
     void expression.offsetWidth;
    expression.classList.add("switch-in");


    const result = document.querySelector(".calculator-result p");
    result.classList.remove("fadeScale");

    // Example: Set the result value (Replace with actual calculation logic)
    // result.textContent = ""; // Change dynamically

    // Remove the class to reset the animation
    result.classList.remove("fade-in");

    // Force reflow (trigger a repaint)
    void result.offsetWidth;

    // Add the class back to restart the animation
    result.classList.add("fade-in");
});