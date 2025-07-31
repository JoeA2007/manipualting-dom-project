let pButton = document.getElementById('p-button');
let imgButton = document.getElementById('img-button');
let pDiv = document.getElementById('p-div');
let imgDiv = document.getElementById('img-div');

pButton.addEventListener('click', function() {
    pDiv.style.display = 'block';
    imgDiv.style.display = 'none';
    
    let newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is a new paragraph added dynamically! Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    
    pDiv.appendChild(newParagraph);
});

imgButton.addEventListener('click', function() {
    imgDiv.style.display = 'block';
    pDiv.style.display = 'none';
    
    let newImage = document.createElement('img');
    newImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2o_8yAWRAvIE1o4f1Jjv9sS_zPViTe9b7A&s';
    newImage.alt = 'Random image';
    newImage.style.margin = '10px';
    newImage.style.border = '2px solid #ccc';
    
    imgDiv.appendChild(newImage);
});