console.clear(); // Konsolu temizle
console.log(
  "Merhaba! Eğer buraya kadar geldiysen, kodlarımı incelemeye başlamışsındır. Eğer bir sorunla karşılaşırsan, benimle iletişime geçebilirsin. İyi incelemeler! 🚀"
);
console.log(
  "%cDİKKAT",
  "color: red; font-size: 100px; font-weight: bold; text-decoration: underline;"
);
console.log(
  `%c\nBu site Anlayana.com® sponsorluğunda yapılmıştır. \nİletişim için = %ctexapy@proton.me %cadresine ulaşınız.`,
  "color: black; font-size: 16px;",
  "color: orange; font-size: 16px;", // Burada sadece turuncu renk kullandık
  "color: black; font-size: 16px;"
);

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

//İLKBAHAR
(function ($) {
  /** Polyfills ve Gereklilikler **/
  var lastTime = 0;
  var vendors = ["webkit", "o", "ms", "moz", ""];
  var vendorCount = vendors.length;

  for (var x = 0; x < vendorCount && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
    window.cancelAnimationFrame =
      window[vendors[x] + "CancelAnimationFrame"] ||
      window[vendors[x] + "CancelRequestAnimationFrame"];
  }

  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }

  $.fn.prefixedEvent = function (type, callback) {
    for (var x = 0; x < vendorCount; ++x) {
      if (!vendors[x]) {
        type = type.toLowerCase();
      }
      var el = this instanceof jQuery ? this[0] : this;
      el.addEventListener(vendors[x] + type, callback, false);
    }
    return this;
  };

  function elementInViewport(el) {
    if (el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function randomArrayElem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  $.fn.sakura = function (event, options) {
    var target = this.selector === "" ? $("body") : this;

    var defaults = {
      blowAnimations: [
        "blow-soft-left",
        "blow-medium-left",
        "blow-soft-right",
        "blow-medium-right",
      ],
      className: "sakura",
      fallSpeed: 1,
      maxSize: 14,
      minSize: 10,
      newOn: 300,
      swayAnimations: [
        "sway-0",
        "sway-1",
        "sway-2",
        "sway-3",
        "sway-4",
        "sway-5",
        "sway-6",
        "sway-7",
        "sway-8",
      ],
    };

    var options = $.extend({}, defaults, options);

    if (typeof event === "undefined" || event === "start") {
      target.css({
        "overflow-x": "hidden",
      });

      var petalCreator = function () {
        if (target.data("sakura-anim-id")) {
          setTimeout(function () {
            requestAnimationFrame(petalCreator);
          }, options.newOn);
        }

        var blowAnimation = randomArrayElem(options.blowAnimations);
        var swayAnimation = randomArrayElem(options.swayAnimations);
        var fallTime =
          (document.documentElement.clientHeight * 0.007 +
            Math.round(Math.random() * 5)) *
          options.fallSpeed;

        var animations =
          "fall " +
          fallTime +
          "s linear 0s 1" +
          ", " +
          blowAnimation +
          " " +
          ((fallTime > 30 ? fallTime : 30) - 20 + randomInt(0, 20)) +
          "s linear 0s infinite" +
          ", " +
          swayAnimation +
          " " +
          randomInt(2, 4) +
          "s linear 0s infinite";

        var petal = $('<div class="' + options.className + '" />');
        var height = randomInt(options.minSize, options.maxSize);
        var width = height - Math.floor(randomInt(0, options.minSize) / 3);

        petal
          .prefixedEvent("AnimationEnd", function () {
            if (!elementInViewport(this)) {
              $(this).remove();
            }
          })
          .prefixedEvent("AnimationIteration", function (ev) {
            if (
              ($.inArray(ev.animationName, options.blowAnimations) !== -1 ||
                $.inArray(ev.animationName, options.swayAnimations) !== -1) &&
              !elementInViewport(this)
            ) {
              $(this).remove();
            }
          })
          .css({
            "-webkit-animation": animations,
            animation: animations,
            "border-radius":
              randomInt(
                options.maxSize,
                options.maxSize + Math.floor(Math.random() * 10)
              ) +
              "px " +
              randomInt(1, Math.floor(width / 4)) +
              "px",
            height: height + "px",
            left:
              Math.random() * document.documentElement.clientWidth - 100 + "px",
            "margin-top": -(Math.floor(Math.random() * 20) + 15) + "px",
            width: width + "px",
          });

        target.append(petal);
      };

      target.data("sakura-anim-id", requestAnimationFrame(petalCreator));
    } else if (event === "stop") {
      var animId = target.data("sakura-anim-id");
      if (animId) {
        cancelAnimationFrame(animId);
        target.data("sakura-anim-id", null);
      }
      setTimeout(function () {
        $("." + options.className).remove();
      }, options.newOn + 50);
    }
  };
})(jQuery);

$(document).ready(function () {
  function isSpring() {
    const now = new Date();
    const month = now.getMonth();
    return month >= 2 && month <= 4;
  }

  if (isSpring()) {
    console.log("İlkbahardayız, çiçekler açıyor!");
    $("body").sakura();
  } else {
    console.log("İlkbahar da değiliz.");
  }
});

//YAZ MEVSİMİ
var rays = document.querySelectorAll(".ray");
var sun = document.querySelector(".sun");

function isSummer() {
  var today = new Date();
  var month = today.getMonth(); // 0-11 arası, Ocak 0, Aralık 11
  return month >= 5 && month <= 7; // Haziran (5), Temmuz (6), Ağustos (7)
}

if (isSummer()) {
  console.log("Yaz mevsimindesiniz, güneş tepede!");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var sunPosition = sun.offsetTop;
    var windowHeight = window.innerHeight;

    rays.forEach(function (ray, index) {
      var rayPosition = ray.offsetTop;
      var distance = Math.abs(rayPosition - scrollPosition);

      if (distance < windowHeight) {
        var opacity = Math.max(0, 1.5 - distance / windowHeight);
        ray.style.opacity = opacity;
      }
    });

    // Güneşin opaklık değerini kaydırma pozisyonuna göre ayarla
    var sunDistance = Math.abs(sunPosition - scrollPosition);
    var sunOpacity = Math.max(0, 1.5 - sunDistance / windowHeight);
    sun.style.opacity = sunOpacity;
  });
} else {
  sun.style.opacity = 0; // Yaz dışındaysa güneşi tamamen gizle
  console.log("Yaz mevsiminde değilsiniz, güneş yok.");
}

var y = 0;

//SONBAHAR//
function toggleLeavesVisibility() {
  const now = new Date();
  const month = now.getMonth(); // 0 = Ocak, 1 = Şubat ... 11 = Aralık
  const isAutumn = month >= 8 && month <= 10; // Sonbahar: Eylül (8), Ekim (9), Kasım (10)

  const leavesDiv = document.getElementById("leaves");

  if (isAutumn) {
    console.log("Sonbahardayız, yapraklar dökülüyor!");
    leavesDiv.style.display = "block"; // Görünür yap
  } else {
    console.log("Sonbahar da değiliz, yapraklar yerinde :)");
    leavesDiv.style.display = "none"; // Gizle
  }
}

// Fonksiyonu çalıştır
toggleLeavesVisibility();

//KIŞ MEVSİMİ//
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
