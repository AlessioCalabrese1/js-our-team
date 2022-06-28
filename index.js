/* Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg */



const ourTeam = [
    {
        name : "Wayne Barnett" ,
        role : "Founder & CEO" ,
        identificationImage : "wayne-barnett-founder-ceo.jpg"
    },

    {
        name : "Angela Caroll" ,
        role : "Chief Editor" ,
        identificationImage : "angela-caroll-chief-editor.jpg"
    },

    {
        name : "Walter Gordon" ,
        role : "Office Manager" ,
        identificationImage : "walter-gordon-office-manager.jpg"
    },

    {
        name : "Angela Lopez" ,
        role : "Social Media Manager" ,
        identificationImage : "angela-lopez-social-media-manager.jpg"
    },

    {
        name : "Scott Estrada" ,
        role : "Developer" ,
        identificationImage : "scott-estrada-developer.jpg"
    },

    {
        name : "Barbara Ramos" ,
        role : "Graphic Designer" ,
        identificationImage : "barbara-ramos-graphic-designer.jpg"
    },
];

console.log(ourTeam);

for (let index = 0; index < ourTeam.length; index++) {
    console.log(`Il nome del ${index} membro è: + ${ourTeam[index].name}`);
    console.log(`La posizione del ${index} membro è: " + ${ourTeam[index].role}`);
    console.log(`Il path della foto del ${index} membro è: " + ${ourTeam[index].identificationImage}`);
}

let cardContainer = document.getElementById("card-container");

for (let index = 0; index < ourTeam.length; index++) {
    let card = document.createElement("div");
    let img = document.createElement("img");
    ourTeam[index].identificationImage = `./img/${ourTeam[index].identificationImage}`;
    console.log(ourTeam[index].identificationImage);
    img.setAttribute("src" , ourTeam[index].identificationImage);
    img.classList.add("img-fluid");
    card.classList.add("text-center")
    card.append(img);
    card.append(`${ourTeam[index].name}`);
    card.append(`${ourTeam[index].role}`);
    cardContainer.append(card);
    
}