const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const tastingNotes = {
  Original: {
    copy: "Australiensisk pale ale med passionsfrukt, citrus, mjuk maltkropp och en krispig avslutning.",
    values: [75, 45, 40],
  },
  Session: {
    copy: "Lätt lager med ren maltton, låg beska och en krispig, torr avslutning.",
    values: [80, 20, 30],
  },
  Sommar: {
    copy: "Frisk session pale ale med grapefrukt, apelsinskal och en uppiggande men snäll beska.",
    values: [40, 75, 55],
  },
  Ljus: {
    copy: "Ljus session pale ale med citrus, mjuk humlebeska och en frisk, torr avslutning.",
    values: [70, 55, 35],
  },
};

const dialog = document.querySelector(".beer-dialog");
const dialogTitle = dialog.querySelector("h2");
const dialogCopy = dialog.querySelector(".dialog-copy");
const tasteBars = dialog.querySelector(".taste-bars");
const labels = ["Friskhet", "Beska", "Maltighet"];

document.querySelectorAll(".detail-button").forEach((button) => {
  button.addEventListener("click", () => {
    const beer = button.dataset.beer;
    const notes = tastingNotes[beer];
    dialogTitle.textContent = beer;
    dialogCopy.textContent = notes.copy;
    tasteBars.innerHTML = labels
      .map(
        (label, index) =>
          `<div class="taste-row"><span>${label}</span><div class="bar"><span style="width:${notes.values[index]}%"></span></div></div>`,
      )
      .join("");
    dialog.showModal();
  });
});

dialog.querySelector(".close-dialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
