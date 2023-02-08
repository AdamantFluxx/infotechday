function search() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('info');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="block";                 
        }
    }
}

window.onload = function() {
    document.getElementById("clearButton").addEventListener("click",clear);
  }

function clear() {
    // Select the 'myInput' search box, and set it's value to an empty String
    document.getElementById("searchbar").value = "";
    // Call seach, which should reset the result list
    search();
  }  

