// luz
const light = document.querySelector('.light');

// movimento do mouse
document.addEventListener('mousemove', (e) => {
    // Atualiza a posição da "luz" para seguir o cursor
    light.style.left = `${e.pageX}px`;
    light.style.top = `${e.pageY}px`;
});

// Animação de partículas
const createParticle = () => {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDuration = `${Math.random() * 2 + 3}s`;
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 5000);
};

setInterval(createParticle, 300);

// informações sobre personagens
const characters = document.querySelectorAll(".character");

characters.forEach(character => {
    character.addEventListener("mouseover", () => {
        const name = character.getAttribute("data-name");
        alert(`Mais sobre ${name}`);
    });
});