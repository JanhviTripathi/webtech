let box = document.getElementsByClassName("maincontainer");
let aside = document.querySelector(".aside");
let headings = document.querySelector(".headings")
let popUpContainer = document.querySelector(".popUpContainer");
let popUpbody = document.querySelector(".popUpbody");
let login = document.querySelector(".login")
// let p1 = document.querySelector(".dropdown1");
// let p2 = document.querySelector(".dropdown2");
// let p3 = document.querySelector(".dropdown3");
// let p4 = document.querySelector(".dropdown4");
// let p5 = document.querySelector(".dropdown5");
// // let p6 = document.querySelector(".dropdown6");
// let li1 = document.querySelector(".li1");
// let li2 = document.querySelector(".li2");
// let li3 = document.querySelector(".li3");
// let li4 = document.querySelector(".li4");
// let li5 = document.querySelector(".li5");
// let li6 = document.querySelector(".li6");

let fetchdata = async(url,container) =>{
    let response = await fetch(url)
    let data = await response.json();
    console.log(data.articles); 
    data.articles.forEach((ele,i)=>{
        headings.innerHTML +=`<span>${ele.title}</span>`
    })
    data.articles.filter((ele)=>ele.urlToImage!= null).forEach((ele,i) => {
        displaydata(ele , container);
    });
}
fetchdata("https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=c9c285a1cae54dae843c0d62ccaab7a9",box[0]);
fetchdata("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c9c285a1cae54dae843c0d62ccaab7a9",box[1]);
fetchdata("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c9c285a1cae54dae843c0d62ccaab7a9",box[2]);
fetchdata("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c9c285a1cae54dae843c0d62ccaab7a9",box[3]);
// fetchdata("https://newsapi.org/v2/everything?q=apple&from=2024-11-03&to=2024-11-03&sortBy=popularity&apiKey=c9c285a1cae54dae843c0d62ccaab7a9",aside);
fetchdata("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c9c285a1cae54dae843c0d62ccaab7a9",aside);





let displaydata = (ele,container) =>{
    let card = document.createElement("div");
    card.setAttribute("class","card");
    card.innerHTML=`<img src=${ele.urlToImage} />
                    <p>${ele.title}</p>
                    <p>${ele.content?.length > 50 ? ele.content?.slice(0,50)+"...": ele.content}</p>`;
    container.append(card);
    card.addEventListener("click", () => {
        let button = document.createElement("button");
        button.setAttribute("class","cross");
        button.innerHTML=`<i class="fa-solid fa-xmark" style="color: #f2f2f2;"></i>`;
        let button1 = document.createElement("button");
        button1.setAttribute("class","view");
        // button1.innerHTML=`<a href="${ele.url}"></a>`;
        button1.innerText = "View More";
        let button2 = document.createElement("button");
        button2.setAttribute("class","close");
        button2.innerText="close"
        popUpContainer.style.visibility = "visible";
        popUpbody.innerHTML=`
        <img src=${ele.urlToImage} />
        <p class="author">${ele.author}</p>
        <p class="title">${ele.title}</p>
        <p class="content">${ele.content}</p>
        <p class="url">${ele.url}</p>
        `;
        popUpbody.append(button);
        popUpbody.append(button1);
        popUpbody.append(button2);
        button.addEventListener("click",(e)=>{
            e.stopPropagation();
            popUpContainer.style.visibility = "hidden";
          });
        button2.addEventListener("click",(e)=>{
            e.stopPropagation();
            popUpContainer.style.visibility = "hidden";
          }); 
        button1.addEventListener("click",(e)=>{
            e.stopPropagation();
            window.open(`${ele.url}`,"_blank");
          }); 
      });
     
}
// let cross = document.querySelector(".cross");
popUpContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    popUpContainer.style.visibility = "hidden";
  });
  popUpbody.addEventListener("click", (e) => {
    e.stopPropagation();
    popUpContainer.style.visibility = "visible";
  });
login.addEventListener("click",(e)=>{
    window.open("http://127.0.0.1:5501/loginform.html","_self")
});
// li1.addEventListener("mouseover",()=>{
//     p1.style.display = "block";
   
// })
// li1.addEventListener("mouseleave",()=>{
//     p1.style.display = "none";
 
// })
// li2.addEventListener("mouseover",()=>{
//     p2.style.display = "block";
   
// })
// li2.addEventListener("mouseleave",()=>{
//     p2.style.display = "none";
 
// })
// li3.addEventListener("mouseover",()=>{
//     p3.style.display = "block";
   
// })
// li3.addEventListener("mouseleave",()=>{
//     p3.style.display = "none";
 
// })
// li4.addEventListener("mouseover",()=>{
//     p4.style.display = "block";
   
// })
// li4.addEventListener("mouseleave",()=>{
//     p4.style.display = "none";
 
// })
// li5.addEventListener("mouseover",()=>{
//     p5.style.display = "block";
   
// })
// li5.addEventListener("mouseleave",()=>{
//     p5.style.display = "none";
 
// })
// li6.addEventListener("mouseover",()=>{
//     p6.style.display = "block";
   
// })
// li6.addEventListener("mouseleave",()=>{
//     p6.style.display = "none";
 
// })
