var div = document.getElementById('main');
var display = 0;

function hideShow()
{
     if(display == 1)
     {
        div.style.display = 'block';
        display = 0;
     }
     else
     {
        div.style.display = 'none';
        display = 1;
     }
}

<script>
    // JavaScript code to handle button click event
    document.getElementById('showen').addEventListener('click', function() {
      // Navigate to the error.html page when the button is clicked
      window.location.href = 'error.html';
    });
  </script>