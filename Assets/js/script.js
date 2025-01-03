// Form submission handler
function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Gmail compose URL'ini oluştur
  const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=altbozbey@gmail.com&su=${encodeURIComponent("İletişim Formu: " + name)}&body=${encodeURIComponent("Gönderen: " + name + "\nE-posta: " + email + "\n\nMesaj:\n" + message)}`;

  // Gmail'i yeni sekmede aç
  window.open(gmailURL, "_blank");

  // Formu temizle
  document.getElementById("contactForm").reset();

  // Başarı mesajını göster
  const formMessage = document.getElementById("formMessage");
  formMessage.className = "form-message success";
  formMessage.textContent = "Gmail açılıyor...";

  // 3 saniye sonra mesajı kaldır
  setTimeout(() => {
    formMessage.className = "form-message";
    formMessage.textContent = "";
  }, 3000);

  return false;
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navbar background change on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(52, 58, 64, 0.98)";
  } else {
    header.style.background = "rgba(52, 58, 64, 0.95)";
  }
});

// Add animation to stats when they come into view
const stats = document.querySelectorAll(".stat-item");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 0.5s ease forwards";
      }
    });
  },
  { threshold: 0.5 }
);

stats.forEach((stat) => {
  observer.observe(stat);
});
/*TEXA JOİNED THE GAME*/
/*
ㅤ ∧__∧
（｀•ω• )づ--∧
（つ　 /( •ω•。)
   しーＪ (nnノ) ~pat pat
*/

const konamiCode = ["a", "n", "l", "a", "y", "a", "n", "a"];
let konamiCodePosition = 0;

function konamiCodeCheck(event) {
  if (
    event.key.toLowerCase() === konamiCode[konamiCodePosition].toLowerCase()
  ) {
    konamiCodePosition++;
    if (konamiCodePosition === konamiCode.length) {
      activateEasterEgg();
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
}

function activateEasterEgg() {
  document.getElementById("desc1").innerHTML = "You Found The Secret!";
  document.getElementById("desc2").innerHTML = "Congratulations!";

  console.log(
    "%c Easter Egg ",
    "background: yellow; color: white; font-size: 15px; font-weight: bold;",
    "ε(´｡•_•`)っ 💔"
  );
  setTimeout(() => {
    window.location.href = "https://anlayana.com";
  }, 2500);
}

document.addEventListener("keydown", konamiCodeCheck);

/*TEXA JOİNED THE GAME*/
