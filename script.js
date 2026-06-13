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
    copy: "Ren och krispig session lager med toner av ljust bröd, örter och ett försiktigt citrusslut.",
    values: [70, 30, 45],
  },
  Kväll: {
    copy: "Mjuk lager med rund maltkropp, lätt rostad ton och en balanserad, torr avslutning.",
    values: [55, 45, 65],
  },
  Sommar: {
    copy: "Frisk session pale ale med grapefrukt, apelsinskal och en uppiggande men snäll beska.",
    values: [40, 75, 55],
  },
  Ljus: {
    copy: "Extra lätt lager med rena spannmålstoner, låg beska och hög törstsläckarfaktor.",
    values: [80, 20, 30],
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
