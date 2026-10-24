//get image
let inputimg=document.getElementById("input-file");
console.log(inputimg)
let img=document.getElementById("cover-image");


inputimg.onchange = function(){
    img.src=URL.createObjectURL(inputimg.files[0]);
    console.log(img.value);
}




//move more design up and down
const morebtn = document.getElementById("more-down");
const more = document.getElementById("more");

more.style.display="flex";
//display more for few seconds
setTimeout(()=>{
    more.style.display="none";
},1500);

//toggle display
morebtn.addEventListener("click", ()=>{
    if(more.style.display=="flex"){
        more.style.display="none";
        console.log("Hello");
    }else{
        more.style.display="flex";
         console.log(more.style.display);
    }
})

//next 
function next(){
    const edit = document.querySelector(".container-edit");
    const prw = document.querySelector(".container-preview");
    const bhold = document.querySelector(".btn-hold");
    const nxtbtn = document.getElementById("nxt");
   
   
    // console.log(edit); hide/unhide
    edit.style.display="none";
    prw.style.display="block";
    bhold.style.display="flex";
    nxtbtn.style.display="none";
   

    document.getElementById("hold-footer").style.display="inline-block";
    // document.querySelector(".fonttA").style.position="inline-block";
    
    
    
    //get value
    let clg = document.getElementById("cllg-name").value;
    let cover = document.getElementById("cover-image").getAttribute("src");
    let assignment = document.getElementById("assign-name").value;
    let subject = document.getElementById("subs").value;
    let subby = document.getElementById("submit-by").value;
    let subto = document.getElementById("submit-to").value;
    
    // console.log("subby : ", subby)

    //value to set
    document.getElementById("p-cllg").textContent = clg;
    document.getElementById("p-assign").textContent = assignment;
    document.getElementById("p-subs").textContent = subject;
    document.getElementById("p-image").src=cover;
    document.getElementById("prew-by").textContent = subby;
    document.getElementById("prew-to").textContent = subto;
    
     //scroll to top 
    window.scrollTo({top: 0, behavior: "smooth"});

    // alert("To get better view in mobile devices you can switch to desktop mode")
}

//back to editing
function edit(){
    const edit = document.querySelector(".container-edit");
    const prw = document.querySelector(".container-preview");
    const btnhold = document.querySelector(".btn-hold");
    const nxtbtn = document.getElementById("nxt");
//   console.log(prw);
    // console.log(edit); hide/unhide
    edit.style.display="flex";
    btnhold.style.display="none";
    nxtbtn.style.display="block";
    prw.style.display="none";

      document.getElementById("hold-footer").style.display="none";

}

//get cllg  name from select element
const clgg = document.getElementById("clg");
//default collge
const clgname = document.getElementById("cllg-name");
clgname.value="Darrang College (Autonomous), Tezpur"

//image

clgg.addEventListener("change", () =>{
const value = parseInt(clgg.value);
// console.log("Value : ",value)
    switch(value){
        case 1:
            clgname.value="Darrang College (Autonomous), Tezpur"
            img.src="pictures/logos/darrang.png";
            break;
        
        case 2:
            clgname.value="Tezpur College, Tezpur";
            img.src="pictures/logos/tezpur-cllg.png";
            break;
        
        case 3:
            clgname.value="Tezpur University, Tezpur";
            img.src="pictures/logos/tezpur-univer.png";
            break;

        case 4:
            clgname.value="Tezpur Law College, Tezpur";
            img.src="pictures/logos/tezpur-law.png";
            break;

        case 5:
            clgname.value="St. Mary's Senior Secondary School";
            break;
        
        case 6:
            clgname.value="Tezpur Gurukul";
            break;
    }
   
})

 // document.getElementById("cllg-name").value=clgg.value;




//Align and unalign Colon
const textarea = document.getElementById("submit-by");
const checkAlign = document.getElementById("toggleCheck");
let originalText = "";

if(checkAlign.checked){
    alignColon();
}

checkAlign.addEventListener("change", function(){


    if(this.checked){
        alignColon();
    }else{
        unalignColon();
    }

});

  function alignColon(){
            originalText = textarea.value;

    const lines = textarea.value.split("\n");

    // Find the longest label before the colon
    const maxLength = Math.max(
      ...lines.map(line => {
        const index = line.indexOf(":");
        return index === -1
          ? 0
          : line.slice(0, index).trim().length;
      })
    );

    textarea.value = lines.map(line => {
      const index = line.indexOf(":");

      if (index === -1) return line;

      const label = line.slice(0, index).trim();
      const value = line.slice(index + 1).trim();

      return label.padEnd(maxLength + 1) + ": " + value;
    }).join("\n");
  }


  function unalignColon() {
    const lines = textarea.value.split("\n");
    textarea.value = lines.map(line => {
      const index = line.indexOf(":");
      if (index === -1) return line;

      const label = line.slice(0, index).trim();
      const value = line.slice(index + 1).trim();

      return label + " : " + value;
    }).join("\n");
  }
  





//Select Layout Logic
const l1 = document.getElementById("lyt1");
const l2 = document.getElementById("lyt2");
const l3 = document.getElementById("lyt3");
const layout = document.getElementById("styleLayout");

l1.addEventListener("click", ()=>{
  
    layout.href = "layout/l1.css";
    checkAlign.checked = true;
    alignColon();

    l1.style.filter = "grayscale(0%)";
    //  l1.style.filter = "invert(100%)";

    l1.style.transform = "scale(1.05)";
    l2.style.transform = "scale(1.0)";
    l3.style.transform = "scale(1.0)";

    l1.style.boxShadow = "10px 10px 20px green";
    l2.style.boxShadow = "none";
    l3.style.boxShadow = "none";

   
})

l2.addEventListener("click", ()=>{
   
    layout.href="layout/l2.css"

    l2.style.transform = "scale(1.05)";
    l1.style.transform = "scale(1.0)";
    l3.style.transform = "scale(1.0)";
    

    l2.style.boxShadow = "1px 3px 25px red";
    l1.style.boxShadow = "none";
    l3.style.boxShadow = "none";
    


    //Adjust the Space of the Submitted by:



})


// function unalign2Colon() {

//     }
    


l3.addEventListener("click", ()=>{

    
    const lyt3s = document.getElementById("toggleCheck");

    lyt3s.checked = false;
    unalignColon();

    layout.href = "layout/l3.css"

    l3.style.transform = "scale(1.05)";
    l1.style.transform = "scale(1.0)";
    l2.style.transform = "scale(1.0)";
    
    l3.style.boxShadow = "-3px 10px 20px green";
    l2.style.boxShadow = "none";
    l1.style.boxShadow = "none";
    console.log("Click");
})



//Increae and decrease font size
let fontScale = 1; // Initial font scale
function changeFont(increment) {
    fontScale += increment * 0.1;
    fontScale = Math.max(0.5, Math.min(1.5, fontScale)); // Keep it within reasonable bounds
    document.querySelector(".container-preview").style.setProperty('--font-scale', fontScale);
}

//Show dev log
function toggleVer(){
    const ui = document.getElementById("dev-container");
    // console.log("hello",ui.style)
    if(ui.style.display==="none" || ui.style.display===""){
        ui.style.display="flex";
    }else{
        ui.style.display="none"
    }
}

function cancell(){
    const ui = document.getElementById("dev-container");
    // console.log("hello",ui.style)
    if(ui.style.display!="none" || ui.style.display!=""){
        ui.style.display="none";
    }
   
}




function savepdf(){
   //const pdf=document.getElementById("a4");
    const scaler=document.querySelector(".container-preview");
    const swth =document.getElementById("switch");
    // scale.style.translate="translateY(250px)";
    // console.log(window.getComputedStyle(swth).display);

   if(window.getComputedStyle(swth).display=="block"){
//    console.log("Executed");
   scaler.style.transform="translateY(250px) scale(1)";
   }


html2pdf().set({
  margin: 0,
  filename: "Front-page.pdf",
  image: { type: 'jpeg', quality: 0.6 },
  html2canvas: { scale: 3, useCORS: true },
  jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
})
.from(document.getElementById("a4"))
.save()
.then(() => {

 if(window.getComputedStyle(swth).display=="block"){
//    console.log("Executed block 2");
   scaler.style.transform="translateY(0) scale(0.45)";
   
//    console.log("hdjh",window.getComputedStyle(scaler).translate)
   }else{
    scaler.style.transform="translateY(0) scale(1)";
   }


});


}


//Switch between front and index
const fbtn = document.getElementById('fp'); 
const ibtn = document.getElementById('si'); 
const abtn = document.getElementById('ack-btn');

function showFrontPage(){
    fbtn.style.backgroundColor = "rgb(252, 62, 173)";

    ibtn.style.backgroundColor = "white";
    ibtn.style.color = "black";

    abtn.style.backgroundColor = "white";
    abtn.style.color = "black";

    //show editor
    document.getElementById("frontpage").style.display="flex";
    document.getElementById("indexmaker").style.display="none";
    document.getElementById("ack").style.display="none";

}

function showIndex(){
    ibtn.style.backgroundColor = "rgb(0, 179, 255)";
    
    fbtn.style.backgroundColor = "white";
    fbtn.style.color = "black";

    abtn.style.backgroundColor = "white";
    abtn.style.color = "black";


    //toggle editor
    document.getElementById("frontpage").style.display="none";
    document.getElementById("indexmaker").style.display="flex";
    document.getElementById("ack").style.display="none";
}

function showAck(){
    abtn.style.backgroundColor = "rgb(0, 179, 255)";

    fbtn.style.backgroundColor = "white";
    fbtn.style.color = "black";

    ibtn.style.backgroundColor = "white";
    ibtn.style.color = "black";


     //toggle editor
    document.getElementById("frontpage").style.display="none";
    document.getElementById("indexmaker").style.display="none";
    document.getElementById("ack").style.display="flex";
    
}
// //exit
// window.addEventListener("beforeunload", function (e) {
//     e.preventDefault();
//     e.returnValue = "";
// });


