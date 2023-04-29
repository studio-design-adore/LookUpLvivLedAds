var currentPage = window.location.href;

  // Перевірити, чи містить URL поточної сторінки шлях до головної сторінки
  if (currentPage.includes("main.html")) {
    // Якщо так, додати клас "active" до кнопки "Головна"
    document.getElementById("home-link").classList.add("active");
  }
  else if (currentPage.includes("registration.html")) {
    // Якщо так, додати клас "active" до кнопки "Головна"
    document.getElementById("registration-link").classList.add("active");
  }


const orderForm = document.querySelector('.order-form');

window.addEventListener('scroll', () => {
  const formPosition = orderForm.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;

  if (formPosition < screenPosition) {
    orderForm.classList.add('show');
  }
});


const mouse = newV2();
const center = newV2();
const distanceFromCenter = newV2();
const distanceLerped = newV2();
let simulateMouseMovement = true;

const perspective = 500;
const translateZ = -12;
const rotate = 3;
const skew = 3;

const container = document.getElementById("container");
const copies = document.getElementsByClassName("copy");

function updateCenter() {
  const rect = container.getBoundingClientRect();
  center.x = rect.left + rect.width / 2;
  center.y = rect.top + rect.height / 2;
}

function trackMousePosition(event) {
  simulateMouseMovement = false;
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  distanceFromCenter.x = center.x - mouse.x;
  distanceFromCenter.y = center.y - mouse.y;
}

function fakeMousePosition(t) {
  distanceFromCenter.x = Math.sin(t / 500) * window.innerWidth * 0.5;
  distanceFromCenter.y = Math.cos(t / 500) * window.innerWidth * 0.2;
}

function updateTextPosition(t) {
  if (simulateMouseMovement) fakeMousePosition(t);

  lerpV2(distanceLerped, distanceFromCenter);

  for (var i = 1; i < copies.length + 1; i++) {
    const copy = copies[i - 1];
    copy.style.transform = makeTransformString(
      i * distanceLerped.y * 0.03,
      i * translateZ,
      i * rotate * (distanceLerped.x * 0.003),
      i * skew * (distanceLerped.x * 0.003)
    );
  }

  requestAnimationFrame(updateTextPosition);
}

function makeTransformString(y, z, rotate, skew) {
  return `perspective(${perspective}px) translate3d(0px, ${y}px, ${z}px) rotate(${rotate}deg) skew(${skew}deg)`;
}

function lerpV2(position, targetPosition) {
  position.x += (targetPosition.x - position.x) * 0.2;
  position.y += (targetPosition.y - position.y) * 0.2;
}

function newV2(x = 0, y = 0) {
  return {
    x: x,
    y: y
  };
}

updateCenter();
document.addEventListener("mousemove", trackMousePosition);
window.addEventListener("resize", updateCenter);
requestAnimationFrame(updateTextPosition);


      function calculatebtn(){
       var startDate = new Date(document.getElementById("start-date").value);
       var endDate = new Date(document.getElementById("end-date").value);
       if (isNaN(startDate) || isNaN(endDate)) {
         document.getElementById("result").textContent = "Invalid date format";
         return;
       }
       var diffInMs = endDate - startDate;
       if (isNaN(diffInMs)) {
         document.getElementById("result").textContent = "Error calculating time difference";
         return;
       }
       var diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
       var diffInHours = Math.floor(diffInMs / (1000 * 60 * 60)) - diffInDays * 24;
       var diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
       var price = 0;
       if(diffInDays >= 8){
        alert("Зауваження!  Кількість днів перевищує максимальний термін у 7 днів.");
       }


       if(diffInDays >= 1 && diffInDays <= 7){
         price = diffInDays * 1440 * 2 + diffInHours * 60 * 2 + diffInMinutes * 2;
         const num = price/window.rate;
         const roundedNum = num.toFixed(2);
         document.getElementById("result").textContent = "Кількість днів, годин і хвилин: " + diffInDays + " днів, " + diffInHours + " годин, " + diffInMinutes + " хвилин" + "    Загальна вартість= " + price +  "грн. або " + roundedNum + "$" ;
        
       } else if (diffInHours >=1 && diffInHours <=24){
         price = diffInHours * 60 * 5 + diffInMinutes * 5;
         const num = price/window.rate;
         const roundedNum = num.toFixed(2);
         document.getElementById("result").textContent = "Кількість днів, годин і хвилин: " + diffInDays + " днів, " + diffInHours + " годин, " + diffInMinutes + " хвилин" + "    Загальна вартість= " + price +  "грн. або " + roundedNum + "$" ;
       }else if (diffInMinutes >=1 && diffInMinutes <=60){
         price =  diffInMinutes * 7;
         const num = price/window.rate;
         const roundedNum = num.toFixed(2);
         document.getElementById("result").textContent = "Кількість днів, годин і хвилин: " + diffInDays + " днів, " + diffInHours + " годин, " + diffInMinutes + " хвилин" + "    Загальна вартість= " + price +  "грн. або " + roundedNum + "$" ;
        }
        
     };
     
     