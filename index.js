document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.getElementById("menuButton");
    var span = document.getElementsByClassName("close")[0];
    var modal = document.getElementById("myModal");

    menuButton.addEventListener("click", function() {
        modal.style.display = "block";
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

function loadContent(url) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.querySelector('.vamosenbici-main-caracteristicas-respuestas').innerHTML = xhr.responseText;
            } else {
                console.error('Error loading the content');
            }
        }
    };
    xhr.open('GET', url);
    xhr.send();
}

