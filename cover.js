
//get image
let inputimg=document.getElementById("input-file");
let img=document.getElementById("cover-image");


inputimg.onchange = function(){
    img.src=URL.createObjectURL(inputimg.files[0]);
    console.log(img.value);
}


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
   
    
    
    
    //get value
    let clg = document.getElementById("cllg-name").value;
    let cover = document.getElementById("cover-image").getAttribute("src");
    let assignment = document.getElementById("assign-name").value;
    let subject = document.getElementById("subs").value;
    let subby = document.getElementById("submit-by").value;
    let subto = document.getElementById("submit-to").value;
    
    console.log("subby : ", subby)

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
  console.log(prw);
    // console.log(edit); hide/unhide
    edit.style.display="flex";
    btnhold.style.display="none";
    nxtbtn.style.display="block";
    prw.style.display="none";


}
//get cllg  name from select element
let clgg = document.getElementById("clg");
document.getElementById("cllg-name").value=clgg.value;
console.log(clgg.value)

//get value

clgg.addEventListener("change", () =>{
    document.getElementById("cllg-name").value=clgg.value;
})

function savepdf(){
   //const pdf=document.getElementById("a4");
    const scaler=document.querySelector(".container-preview");
    const swth =document.getElementById("switch");
    // scale.style.translate="translateY(250px)";
    console.log(window.getComputedStyle(swth).display);

   if(window.getComputedStyle(swth).display=="block"){
   console.log("Executed");
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
   console.log("Executed block 2");
   scaler.style.transform="translateY(0) scale(0.45)";
   
//    console.log("hdjh",window.getComputedStyle(scaler).translate)
   }else{
    scaler.style.transform="translateY(0) scale(1)";
   }


});


}

