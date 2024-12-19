function buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
activeButton.classList.remove("pressed");
    },100);
    
}

document.getElementById('viewPdfBtn').addEventListener('click', function () {
    const pdfContainer = document.getElementById('pdfContainer');
    const button = document.getElementById('viewPdfBtn');

    if (pdfContainer.style.display === 'block') {
        pdfContainer.style.display = 'none'; // Hide the PDF
        button.textContent = 'View PDF'; // Change button text
    } else {
        pdfContainer.style.display = 'block'; // Show the PDF
        button.textContent = 'Hide PDF'; // Change button text
    }
});