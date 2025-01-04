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

const CANVAS_HEIGHT = 2;
const SNOWFLAKE_AMOUNT = 90;
const SNOWFLAKE_SIZE = {
  min: 1,
  max: 5,
};
const SNOWFLAKE_SPEED = {
  min: 1,
  max: 2.2,
};
const CANVAS_SELECTOR = ".snowverlay";

let animationFrame;

// Kış mevsimi kontrolü
const isWinter = () => {
  const currentMonth = new Date().getMonth(); // 0 (Ocak) - 11 (Aralık)
  return currentMonth === 11 || currentMonth === 0 || currentMonth === 1; // Aralık, Ocak, Şubat
};

// Shared utilities
const setupCanvas = () => {
  const canvas = document.querySelector(CANVAS_SELECTOR);
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return null;
  }

  const setCanvasSize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * CANVAS_HEIGHT;
  };

  setCanvasSize();
  window.addEventListener("resize", setCanvasSize);

  return { canvas, ctx };
};

const createSnowflake = (canvas, isAnimated = true, index = 0) => ({
  x: Math.random() * canvas.width,
  y: isAnimated
    ? -20 - (index * canvas.height) / SNOWFLAKE_AMOUNT
    : Math.random() * canvas.height,
  size:
    Math.random() * (SNOWFLAKE_SIZE.max - SNOWFLAKE_SIZE.min) +
    SNOWFLAKE_SIZE.min,
  speed:
    Math.random() * (SNOWFLAKE_SPEED.max - SNOWFLAKE_SPEED.min) +
    SNOWFLAKE_SPEED.min,
  opacity: isAnimated ? null : Math.random() * 0.5 + 0.2,
});

const drawSnowflake = (ctx, flake, canvas) => {
  ctx.beginPath();
  ctx.fillStyle = `rgba(230, 230, 230, ${
    flake.opacity ?? 1 - flake.y / canvas.height
  })`;
  ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
  ctx.fill();
};

const renderStaticSnow = () => {
  const setup = setupCanvas();
  if (!setup) return;
  const { canvas, ctx } = setup;

  Array(SNOWFLAKE_AMOUNT)
    .fill(undefined)
    .map(() => createSnowflake(canvas, false))
    .forEach((flake) => drawSnowflake(ctx, flake, canvas));
};

const startSnowAnimation = () => {
  const setup = setupCanvas();
  if (!setup) {
    return;
  }

  const { canvas, ctx } = setup;

  const snowflakes = Array(SNOWFLAKE_AMOUNT)
    .fill(undefined)
    .map((_event, index) => createSnowflake(canvas, true, index));

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach((flake) => {
      flake.y += flake.speed;
      flake.x += Math.sin(flake.y / 30) * 0.5;

      if (flake.y > canvas.height) {
        flake.y = 0;
        flake.x = Math.random() * canvas.width;
      }

      drawSnowflake(ctx, flake, canvas);
    });

    animationFrame = requestAnimationFrame(animate);
  };

  animate();

  return () => {
    cancelAnimationFrame(animationFrame);
  };
};

const init = () => {
  // Kış mevsimi kontrolü
  if (isWinter()) {
    console.log("Kış mevsimindeyiz, kar yağıyor!");
  } else {
    console.log("Kış mevsiminde değiliz, kar yağıyor.");
    return; // Eğer kış mevsimi değilse, hiçbir şey yapılmaz
  }

  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const handleMotionPreference = (event) => {
    if (event.matches) {
      renderStaticSnow();
    } else {
      startSnowAnimation();
    }
  };

  mediaQuery.addEventListener("change", handleMotionPreference);
  handleMotionPreference(mediaQuery);
};

document.addEventListener("DOMContentLoaded", init);
