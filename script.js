// ===============================
// BOTÃO DA CARTA
// ===============================

const cartaBtn = document.getElementById("cartaBtn");
const carta = document.getElementById("carta");

cartaBtn.addEventListener("click", () => {

    if (carta.style.display === "block") {

        carta.style.display = "none";
        cartaBtn.innerHTML = "Abrir Nossa Carta 💌";

    } else {

        carta.style.display = "block";
        cartaBtn.innerHTML = "Fechar Nossa Carta ❤️";

        carta.scrollIntoView({
            behavior: "smooth"
        });
    }

});


// ===============================
// CONTADOR
// ===============================

const inicio = new Date(
    "2026-05-01T00:00:00"
);

function atualizarTempo() {

    const agora = new Date();

    let diferenca = agora - inicio;

    const dias = Math.floor(
        diferenca /
        (1000 * 60 * 60 * 24)
    );

    diferenca =
        diferenca %
        (1000 * 60 * 60 * 24);

    const horas = Math.floor(
        diferenca /
        (1000 * 60 * 60)
    );

    diferenca =
        diferenca %
        (1000 * 60 * 60);

    const minutos = Math.floor(
        diferenca /
        (1000 * 60)
    );

    diferenca =
        diferenca %
        (1000 * 60);

    const segundos = Math.floor(
        diferenca / 1000
    );

    document.getElementById("dias").textContent =
        dias;

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");
}

atualizarTempo();
setInterval(atualizarTempo, 1000);


// ===============================
// ANIMAÇÕES AO ROLAR A PÁGINA
// ===============================

const elementos = document.querySelectorAll(
    ".time-box, .video-card, .fotos img, .carta-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);

elementos.forEach((item) => {

    item.style.opacity = "0";
    item.style.transform =
        "translateY(80px)";
    item.style.transition =
        "all 1s ease";

    observer.observe(item);

});


// ===============================
// EFEITO PARALLAX NO TÍTULO
// ===============================

const titulo =
    document.querySelector(".hero h1");

document.addEventListener(
    "mousemove",
    (e) => {

        const x =
            (window.innerWidth / 2 -
                e.clientX) / 40;

        const y =
            (window.innerHeight / 2 -
                e.clientY) / 40;

        titulo.style.transform =
            `translate(${x}px, ${y}px)`;
    }
);


// ===============================
// APARECIMENTO SUAVE DA PÁGINA
// ===============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";
document.body.style.transition =
    "opacity 1s ease";


// ===============================
// BRILHO NOS CARDS AO PASSAR O MOUSE
// ===============================

const cards = document.querySelectorAll(
    ".time-box, .video-card"
);

cards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            card.style.background =
                `
                radial-gradient(
                    circle at ${x}px ${y}px,
                    rgba(255,255,255,.18),
                    rgba(255,255,255,.07)
                )
                `;
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.background =
                "rgba(255,255,255,.08)";
        }
    );

});


// ===============================
// ANIMAÇÃO NAS FOTOS
// ===============================

const fotos =
    document.querySelectorAll(".fotos img");

fotos.forEach((foto) => {

    foto.addEventListener(
        "mouseenter",
        () => {

            foto.style.transform =
                "translateY(-12px) scale(1.05)";
        }
    );

    foto.addEventListener(
        "mouseleave",
        () => {

            foto.style.transform =
                "translateY(0) scale(1)";
        }
    );

});