let modeButton = document.querySelector("#modeButton");
let resumeBtn=document.querySelector(".resumeBtn");

let mode="lightMode";
const toggleDarkmode =()=>{
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelectorAll(".bg-wp").forEach((bgwp)=>{
        bgwp.style.backgroundColor = "#560bad"; // Purple
    })
    document.querySelectorAll(".col-pw").forEach((colpw)=>{
        colpw.style.color=  "#ffffff" // white
    })
    document.querySelectorAll(".col-gw").forEach((colgw)=>{
        colgw.style.color = "#ffffff" // white
    })

    document.querySelector(".navbar").style.boxShadow = "0 0 10px rgb(236, 231, 231, 0.9)"
    document.querySelector("#modeButton").style.backgroundColor= "#ffffff"; // White
    document.querySelector("#modeButton").innerText="\u2600";
};

const toggleLightmode=()=>{
    document.querySelector("body").style.backgroundColor = "rgb(236, 231, 231)";//smokyWhite
    document.querySelectorAll(".bg-wp").forEach((bgwp)=>{
        bgwp.style.backgroundColor =  "#ffffff"; // White
    })

    document.querySelectorAll(".col-pw").forEach((colpw)=>{
        colpw.style.color ="#560bad"; // Purple
})
    document.querySelectorAll(".col-gw").forEach((colgw)=>{
    colgw.style.color ="#353535" //Grey
})
    document.querySelector(".navbar").style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    document.querySelector("#modeButton").style.backgroundColor="#560bad"; // Purple
    document.querySelector("#modeButton").innerText="\uD83C\uDF19";
};

// Contact Me function
function  openMailBox() {
    const myEmailAddress = "rohitkumarr2212@gmail.com" 
    
    // Create a mailto + encodeURIComponent
    const linkToMailbox = "mailto:" + encodeURIComponent(myEmailAddress);
    
    // Open the default emailSoftware
    window.location.href = linkToMailbox;
};

//myResume
resumeBtn.addEventListener("click",()=>{
    let myResume = "myResume.pdf";
    window.open(myResume);
});

modeButton.addEventListener("click",()=>{
    if(mode==="lightMode"){
        mode="darkMode";
        toggleDarkmode();

    }
    else{
        mode="lightMode";
        toggleLightmode();
    }
    // console.log(mode);
});

