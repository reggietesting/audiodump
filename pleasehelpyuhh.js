document.addEventListener("DOMContentLoaded", function() {
    var element = document.getElementById("clicker");
    element.addEventListener("click", async function() {
        console.log("hello!")
      try {
        const word = document.getElementById("def").value;
        const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word);
        const data = await response.json();
        
        if (data && data[0]) {
          console.log(data[0].meanings[0].definitions[0].definition);
          document.getElementById("name").innerHTML = word;
        } else if (data && data.title) {
          document.getElementById("name").innerHTML = data.title;
        } else {
          document.getElementById("name").innerHTML = "Error";
        }
      } catch (error) {
        console.error("Error:", error);
        document.getElementById("name").innerHTML = "Error";
      }
    });
    console.log("yo")
    document.getElementById("codeprojects_pagefooter").parentNode.removeChild(document.getElementById("codeprojects_pagefooter"))
  });
