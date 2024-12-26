const calendarContainer = document.getElementById('calendar');


const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];


for (let i = 1; i <= 24; i++) {
  let box = document.createElement('li');
  box.classList.add('calendar-box');
  let number = document.createElement('p');
  number.innerHTML = i;
  number.style.fontSize='40px';
  const day=days[(i-1)%days.length];
  let dayele=document.createElement('p');
  dayele.classList.add('day');
  dayele.innerHTML=day;
  dayele.style.fontSize='20px';
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');
  icon.style.marginTop='10px';
  let description = document.createElement('p');
  description.innerHTML = "Open me!";
  description.style.fontSize='20px';
  description.style.marginLeft='10px';
  box.appendChild(number);
  box.append(dayele);
  box.appendChild(icon);
  box.appendChild(description);
  box.onclick=function(){
    const existingCont = document.querySelector('.container');
    if (existingCont) existingCont.remove();
    const cont=document.createElement('div');
    cont.classList.add('container');
    box.appendChild(cont);
    const icondiv = document.createElement('i');
    icondiv.classList.add('fas', 'fa-gift','fa-5x');
    cont.appendChild(icondiv);
    const btn=document.createElement('button');
    btn.classList.add('btn');
    btn.textContent='CLOSE';
    cont.appendChild(btn);
    btn.addEventListener('click',function(event){
      event.stopPropagation();
      cont.remove();
    });
  };
  
  calendarContainer.appendChild(box);
}
