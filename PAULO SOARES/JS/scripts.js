const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "Formulário Animado com JS puro e CSS Animation",
    duration: "57 min",
    thumb: "",
    video_id: "GykTLqODQuU"
  },
  {
    title: "Desvendando o CSS Grid na prática",
    duration: "36 min",
    thumb: "",
    video_id: "HN1UjzRSdBk"
  },
  {
    title: "Array: Higher Order Functions",
    duration: "54 min",
    thumb: "",
    video_id: "rAzHvYnQ8DY"
  },
  {
    title: "O que é API? REST e RESTful?",
    duration: "33 min",
    thumb: "",
    video_id: "ghTrp1x_1As"
  },
  {
    title: "Desvendando a variável this no Javascript",
    duration: "48 min",
    thumb: "",
    video_id: "GSqR2i-Pq6o"
  },
  {
    title:
      "Como usar Git e Github na prática: Guia para iniciantes",
    duration: "33 min",
    thumb: "",
    video_id: "2alg7MQ6_sI" //  "gVFgTvf3rj8" para usar de exemplo
  }
];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    video.duration;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});