document.addEventListener("DOMContentLoaded", function() {
    var equipeElements = document.getElementsByClassName("equipe");
    var isTextHidden = false;

    // Function to toggle text visibility
    function toggleTextVisibility() {
        for (var i = 0; i < equipeElements.length; i++) {
            // Check if text is hidden or visible
            if (isTextHidden) {
                // Show the text by restoring its original content
                equipeElements[i].style.display = "table-cell";
            } else {
                // Hide the text
                equipeElements[i].style.display = "none";
            }
        }
        // Toggle the state of text visibility
        isTextHidden = !isTextHidden;
    }

    // Add event listener to the button
    document.getElementById("hideButton").addEventListener("click", toggleTextVisibility);
});





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


  document.addEventListener("DOMContentLoaded", function() {
    // Get references to the button and the text
    var toggleButtonPoules = document.getElementById("toggleButtonPoules");
    var poleText = document.getElementById("poleText");
    
    // Add event listener to the button
    toggleButtonPoules.addEventListener("click", function() {
        // Toggle the visibility of the text
        if (poleText.style.display === "none") {
            poleText.style.display = "block"; // Show the text
            toggleButtonPoules.textContent = "Masquer les poules"; // Change button text
        } else {
            poleText.style.display = "none"; // Hide the text
            toggleButtonPoules.textContent = "Afficher les poules"; // Change button text
        }
    });
});

document.getElementById('navbarToggler').addEventListener('click', function () {
  var navbarItems = document.getElementById('navbarSupportedContent');
  navbarItems.classList.toggle('show');})