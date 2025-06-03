
document.getElementById("click").addEventListener("click", () => {
  document.getElementById("clickmsg").innerText = "Button clicked!";
});

document.getElementById("key").addEventListener("keydown", (e) => {
  document.getElementById("keymsg").innerText = `The key: ${e.key}`;
});

document.getElementById("select").addEventListener("change", (e) => {
  const value = e.target.value;
  const msg = document.getElementById("selectmsg");
  const img = document.getElementById("selectimg");

  const images = {
    A: {
      text: "A for Apple",
      src: "./img/apple.jpg"
    },
    B: {
      text: "B for Ball",
      src: "./img/ball.avif"
    },
    C: {
      text: "C for Cat",
      src: "./img/cat.jpg"
    },
    D: {
      text: "D for Dog",
      src: "./img/dog.jpeg"
    }
  };

  if (images[value]) {
    msg.innerText = images[value].text;
    img.src = images[value].src;
    img.style.display = "block";
  } else {
    msg.innerText = "";
    img.style.display = "none";
  }
});

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault(); 
  document.getElementById("submitmsg").innerText = "Form submitted";
});
