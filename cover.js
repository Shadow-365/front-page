
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

    alert("To get better view in mobile devices you can switch to desktop mode")
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
    const pdf=document.getElementById("a4");
    console.log(pdf);

html2pdf().set({
  margin: 0,
  filename: "Front-page.pdf",
  image: { type: 'jpeg', quality: 0.6 },
  html2canvas: { scale: 3, useCORS: true },
  jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
})
.from(document.getElementById("a4"))
.save();
}

