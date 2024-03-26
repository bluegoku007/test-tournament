var modal = document.getElementById("myModal");
var btns = document.getElementsByClassName("edit");
var span = document.getElementsByClassName("close")[0];

// Open modal when any button is clicked
for (var i = 0; i < btns.length; i++) {
  btns[i].onclick = function() {
    modal.style.display = "block";
  }
}





// Close modal when span (x) is clicked
span.onclick = function() {
  modal.style.display = "none";
}


//modal personalisee
var modal2 = document.getElementById("modalperso");
var btnpersonalise = document.getElementsByClassName("personalise");
var span = document.getElementsByClassName("close2")[0];

// Open modal when any button is clicked
for (var i = 0; i < btnpersonalise.length; i++) {
  btnpersonalise[i].onclick = function() {
    modal2.style.display = "block";
  }
}

// Close modal when span (x) is clicked
span.onclick = function() {
  modal2.style.display = "none";
}



// Close modal when clicking outside the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//modal personalisee
var modal3 = document.getElementById("modalpersopoules");
var btnpersopoules = document.getElementsByClassName("personalisepoules");
var span = document.getElementsByClassName("close3")[0];

// Open modal when any button is clicked
for (var i = 0; i < btnpersopoules.length; i++) {
  btnpersopoules[i].onclick = function() {
    modal3.style.display = "block";
  }
}

// Close modal when span (x) is clicked
span.onclick = function() {
  modal3.style.display = "none";
}



// Close modal when clicking outside the modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Get the button element
function changeButtonColor(button) {
    var i = 0; // Declare i inside the function to reset it for each button
  
    // Add click event listener to the button
    button.addEventListener("click", function() {
      if (i % 2 == 0) {
        button.style.backgroundColor = "white";
        button.style.color = "green";
      } else {
        button.style.backgroundColor = "gray";
        button.style.color = "white";
      }
      i++; // Increment i after each click
    });
  }
  
  // Get all buttons with class "clickable"
  var buttons = document.getElementsByClassName("clickable");
  
  // Iterate through the buttons and attach the color change function to each
  for (var j = 0; j < buttons.length; j++) {
    changeButtonColor(buttons[j]);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var dropdownToggleClass = 'dropdown-toggle';
    var dropdownMenuClass = 'dropdown-menu';
    var showClass = 'show';
  
    // Function to handle dropdown toggle
    function handleDropdownToggle(event) {
      var dropdownToggle = event.target;
      var dropdownMenu = dropdownToggle.nextElementSibling;
  
      // Toggle the 'show' class on the dropdown toggle and menu
      dropdownToggle.classList.toggle(showClass);
      dropdownMenu.classList.toggle(showClass);
      
      event.preventDefault(); // Prevent the default link behavior
    }
  
    // Function to close dropdown menu when clicking outside
    function closeDropdownMenu(event) {
      var dropdownToggle = document.querySelector('.' + dropdownToggleClass);
      var dropdownMenu = document.querySelector('.' + dropdownMenuClass);
  
      if (!event.target.closest('.' + dropdownToggleClass)) {
        dropdownMenu.classList.remove(showClass);
        dropdownToggle.classList.remove(showClass);
      }
    }
  
    // Attach click event listener to dropdown toggle buttons
    var dropdownToggles = document.querySelectorAll('.' + dropdownToggleClass);
    dropdownToggles.forEach(function (toggle) {
      toggle.addEventListener('click', handleDropdownToggle);
    });
  
    // Close dropdown menu when clicking outside
    document.addEventListener('click', closeDropdownMenu);
  });

  document.getElementById('navbarToggler').addEventListener('click', function () {
    var navbarItems = document.getElementById('navbarSupportedContent');
    navbarItems.classList.toggle('show');})