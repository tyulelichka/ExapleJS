const tabs = document.getElementById('tabs');
const tabs1 = document.getElementById('tabs1');
const content = document.querySelectorAll('.content');
const content1 = document.querySelectorAll('.content1');


const changeClass = el =>{
  
for(let i =0; i<tabs.children.length;i++){
    tabs.children[i].classList.remove('active');
}
el.classList.add('active');
}


tabs.addEventListener('click', e =>{
   const currTAb = e.target.dataset.btn;
   changeClass(e.target);
   for(let i =0; i<content.length;i++){
    content[i].classList.remove('active');
    if(content[i].dataset.content === currTAb)
    {
        content[i].classList.add('active');
    }
}
})




const changeClass1 = el =>{
  
    for(let i =0; i<tabs1.children.length;i++){
        tabs1.children[i].classList.remove('active');
    }
    el.classList.add('active');
    }
    
    
    tabs1.addEventListener('click', e =>{
       const currTAb = e.target.dataset.btn;
       changeClass1(e.target);
       for(let i =0; i<content1.length;i++){
        content1[i].classList.remove('active');
        if(content1[i].dataset.content === currTAb)
        {
            content1[i].classList.add('active');
        }
    }
    })
    