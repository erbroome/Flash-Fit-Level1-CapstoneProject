
// JavaScript file for the Flex-Fit Exercise App
// Create a list of exercises
// List of all possible exercises
let allExercises = [
    "Push-ups", "Squats", "Jumping Jacks", "Lunges",
    "Plank", "Sit-ups", "Mountain Climbers", "Burpees",
    "High Knees", "Butt Kicks", "Bicycle Crunches", "Wall Sit", "Tricep Dips",
    "Leg Raises", "Russian Twists", "Side Plank", "Glute Bridges",       
  ];
  
  // Function that runs when button is clicked
  function showExercises() {
    let selected = []; 
    console.log("Generating exercises...");
    // Clear the previous exercises
    document.getElementById("exercise-list").innerHTML = "";


  
    for (let i = 0; i < 4; i++) {
    // Pick a random index from the array
    let randomIndex = Math.floor(Math.random() * allExercises.length);
      selected.push(allExercises[randomIndex]);
      console.log("Selected exercise: " + allExercises[randomIndex]);
    }
  
    // Show the exercises in the HTML
    let output = "<ul>";
    for (let i = 0; i < selected.length; i++) {
      output += "<li>" + selected[i] + "</li>";
    }
    output += "</ul>";
  
    document.getElementById("exercise-list").innerHTML = output;  
    console.log("Exercises generated and displayed.");      
  }
  