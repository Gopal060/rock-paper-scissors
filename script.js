// select the dom elements 
const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const cpuResult = document.querySelector(".cpu_result img");
const result = document.querySelector(".result");
const optionImage = document.querySelectorAll(".option_image");

// loop through each option images element
optionImage.forEach((image, index) => {
  image.addEventListener("click", (evenInfo) => {
    image.classList.add("active");
    userResult.src = cpuResult.src = "images/rock.png";
    userResult.textContent = "Wait..!";

    // Loop through each option image again
    optionImage.forEach((image2, index2) => {
      // If the current index doesn't match the clicked index Remove the "active" class from the other option images
      index2 !== index && image2.classList.remove("active");
    });

    // add the start class in game container
    gameContainer.classList.add("start");

     // Set a timeout to delay the result calculation
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // Get the source of the clicked option image
      let imageSrc = evenInfo.target.querySelector("img").src;
      // set the user image to the clicked option image
      userResult.src = imageSrc;

      // generate random nums
      let randomNumber = Math.floor(Math.random() * 3);

      //create an array of CPU image options
      let captureImage = [
        "images/rock.png",
        "images/paper.png",
        "images/scissors.png",
      ];

    //   Set the CPU image to a random option from the array
      cpuResult.src = captureImage[randomNumber];

      let userValue = ["R", "P", "S"][randomNumber];
      let cpuValue = ["R", "P", "S"][index];

      // create a object that has all possible outcomes  
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };

    // Look up the outcome value based on user and CPU options
      let outcomeValue = outcomes[userValue + cpuValue];

      // show the result based on the condition
      result.textContent =
        userValue === cpuValue ? "match draw" : `${outcomeValue} won!`;
    }, 2500);
  });
});
