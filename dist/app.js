const html = `
<div class="rocket-container">
  <img class="rocket" src="icon.webp" alt="" />
</div>
`;
document.body.insertAdjacentHTML("afterbegin", html);
const rocket = document.querySelector(".rocket");
rocket.addEventListener("animationend", () => {
  rocket.classList.add("orbit");
});
