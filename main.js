const suivant1=document.getElementById("suivant1");
const selectionner1=document.getElementById("selectionner1");
const selectionner2=document.getElementById("selectionner2");
const selectionner3=document.getElementById("selectionner3");
const suivant3=document.getElementById("suivant3");
const section4=document.getElementById("section4");
const suivant4=document.getElementById("suivant4");
const section5=document.getElementById("section5");


const precedent2=document.getElementById("precedent2");
const precedent3=document.getElementById("precedent3");
const precedent4=document.getElementById("precedent4");
const precedent5=document.getElementById("precedent5");

const section1=document.getElementById("section1");
const section2=document.getElementById("section2");
const section3=document.getElementById("section3");

suivant1.addEventListener('click', ()=>{
    section1.style.display='none';
    section2.style.display='grid';
});

selectionner1.addEventListener('click', ()=>{
    section2.style.display='none';
    section3.style.display='grid';
});

selectionner2.addEventListener('click', ()=>{
    section2.style.display='none';
    section3.style.display='grid';
});
selectionner3.addEventListener('click', ()=>{
    section2.style.display='none';
    section3.style.display='grid';
});

precedent2.addEventListener('click', ()=>{
    section2.style.display='none';
    section1.style.display='block';
});

precedent3.addEventListener('click', ()=>{
    section3.style.display='none';
    section2.style.display='grid';
});

suivant3.addEventListener('click', ()=>{
    section3.style.display='none';
    section4.style.display='block';
    ajout()
});

suivant4.addEventListener('click', ()=>{
    section4.style.display='none';
    section5.style.display='block';
});

precedent4.addEventListener('click', ()=>{
    section4.style.display='none';
    section3.style.display='block';
});

precedent5.addEventListener('click', ()=>{
    section5.style.display='none';
    section4.style.display='block';
});



const moins1 = document.getElementById("moins1");
const nbr1 = document.getElementById("nbr1");
const plus1 = document.getElementById("plus1");

const moins = document.getElementById("moins");
const nbr = document.getElementById("nbr");
const plus = document.getElementById("plus");

const total = document.getElementById("total");
const places = document.querySelectorAll('.place');



let nbAdultes = 0; 
let nbEnfants = 0;
let counterPlaces = 0;  

function Total() {  
    let prixTotal= (nbAdultes * 500) + (nbEnfants * 200);
    total.textContent = 'Prix total :' + prixTotal+ 'dh';
}

moins.addEventListener('click', function() {
    if (nbAdultes > 0) {
        nbAdultes--;
        if (nbAdultes < 10) {
            nbr.textContent = '0' + nbAdultes;  
        } else {
            nbr.textContent = nbAdultes;  
        }
        // PLACES();
    }
    Total();
});

plus.addEventListener('click', function() {
    nbAdultes++;
    if (nbAdultes < 10) {
        nbr.textContent = '0' + nbAdultes;  
    } else {
        nbr.textContent = nbAdultes;  
    }
    // PLACES();
    Total(); 
});

moins1.addEventListener('click', function() {
    if (nbEnfants > 0) {
        nbEnfants--;
        if (nbEnfants < 10) {
            nbr1.textContent = '0' + nbEnfants;  
        } else {
            nbr1.textContent = nbEnfants;  
        }    
        // PLACES();  
    }       
    Total();
});

plus1.addEventListener('click', function() {
    nbEnfants++;
    if (nbEnfants < 10) {
        nbr1.textContent = '0' + nbEnfants;  
    } else {
        nbr1.textContent = nbEnfants;  
    }
    // PLACES();
    Total(); 
    
});




suivant3.disabled = true;
places.forEach(place => {
    place.addEventListener('click', function() {
        if (counterPlaces < nbAdultes + nbEnfants) {
            place.style.backgroundColor = 'green';
            counterPlaces++;
            
        } else if (place.style.backgroundColor === 'green') {
            place.style.backgroundColor = '';
            counterPlaces--;
        }
        if(counterPlaces === nbAdultes + nbEnfants){
            suivant3.disabled = false;
        }
        else {
            suivant3.disabled = true;
        }
    });
});

Total();


const Informations=document.querySelector(".Informations");


function ajout() {
    for (let i = 0; i < counterPlaces; i++) {
        const div = document.createElement('div');
        div.innerHTML =`<input type="text" id="nom${i}" placeholder="Entrer votre nom" required>
                        <input type="text" id="prenom${i}" placeholder="Entrer votre prenom" required>
                        <input type="email" id="email${i}" placeholder="Entrer votre email" required>`;
                        console.log(counterPlaces);
                        
        Informations.appendChild(div);
    }
}







// function PLACES() {
//     const totalVoyageurs = nbAdultes + nbEnfants;
//     let counterPlaces = 0; 
//     places.forEach(place => {
//         place.classList.remove('selected');
//     });
//     for (let i = 0; i < totalVoyageurs ; i++) {
//         places[i].classList.add('selected');
//         counterPlaces++;
//     }
// }

// Total();
// PLACES();





































//function affichage() {
    //     for (let i = 0; i < counterPlaces; i++) {
    //         const nom = document.getElementById(`nom${i}`).value;
    //         const prenom = document.getElementById(`prenom${i}`).value;
    //         const email = document.getElementById(`email${i}`).value;
    
    //         const div = document.createElement('div');
    //         div.classList.add('result');
    //         div.innerHTML =`<p>Nom: ${nom}</p>
    //                         <p>Prénom: ${prenom}</p>
    //                         <p>Email: ${email}</p>`;
    //         resultatsDiv.appendChild(div);
    //     }
    // }
    