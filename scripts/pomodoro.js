// Create three variables that hold references to the input, button, and list elements using const.
const input = document.querySelector("input");
const button = document.querySelector("#submit");
const list = document.querySelector("ul");

let tasks = [];

// Create an click event listener for the Add Chapter button using addEventListener and an anonymous function.
button.addEventListener("click", () => {
    // In the function block for adding a chapter, make sure the input is not blank and if not, do the following:
    if (!(input.value == "")) {

        //  Create li, button elements. I added a span element so that I could add the text to the li element.
        const listItem = document.createElement("li");
        const listText = document.createElement("span");
        const deleteButton = document.createElement("img");
        const checkBox = document.createElement('img');

        // create checkbox
        checkBox.setAttribute('src', 'images/check-square.svg')
        checkBox.style.filter = 'invert(1)';
        checkBox.style.cursor = 'pointer';
        listItem.appendChild(checkBox);
        // Append elements to li.
        listText.innerHTML = input.value;
        listItem.appendChild(listText);
        // deleteButton.createElement('img');
        deleteButton.setAttribute('src', 'images/x.svg')
        deleteButton.style.filter = 'invert(1)';
        deleteButton.style.cursor = 'pointer';
        listItem.appendChild(deleteButton);

        // Append li to ul.
        list.appendChild(listItem);

        // Create an event listener for the delete button that removes the li.
        deleteButton.addEventListener("click", () => {
            list.removeChild(listItem);
        });

        // line through checked off items
        checkBox.addEventListener('click', () => {
            listItem.style.textDecoration = 'line-through';
            listItem.style.color = 'red';
        });

        // change checkbox on hover
        checkBox.addEventListener('mouseover', () => {
            checkBox.setAttribute('src', 'images/check-square-fill.svg');  
        });

        // change checkbox on hover off
        checkBox.addEventListener('mouseout', () => {
            checkBox.setAttribute('src', 'images/check-square.svg');  
        });

        // FOR CONSOLE: push items to an array to view
        tasks.push(input.value);
        console.log(tasks);

        // Focus and clear input.
        input.focus();
        input.value = "";
    }
});

const formatRemainingTime = (time) => {
    let minutes = Math.floor(time/60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`
}

let pomodoro_limit = 1500;
let timePassed = 0;
let timeLeft = pomodoro_limit;

const startButton = document.querySelector('#start');

startButton.addEventListener('click', () => {
    setInterval(() => {
    
        // The amount of time passed increments by one
        timePassed = timePassed += 1;
        timeLeft = pomodoro_limit - timePassed;
        
        // The time left label is updated
        document.getElementById('remaining-time').innerHTML = formatRemainingTime(timeLeft);
      }, 1000);
})

