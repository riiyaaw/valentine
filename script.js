const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      background:linear-gradient(135deg,#ffb6c1,#ffd1dc);
      text-align:center;">
      <h1 style="color:#e6005c;">Yayyy! 💖🥰</h1>
      <p style="font-size:1.3rem;color:#800033;">
        I knew you’d say yes, Ashwin 💕
      </p>
    </div>
  `;
});
