class GlowButton extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <button class="glow-button">
        <span>${this.textContent}</span>
        <div class="gradient"></div>
      </button>
    `;
    this.initInteraction();
  }

  initInteraction() {
    const button = this.querySelector('.glow-button');
    button.addEventListener("pointermove", (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(button, {
        "--pointer-x": `${x}px`,
        "--pointer-y": `${y}px`,
        duration: 0.6,
      });

      gsap.to(button, {
        "--button-glow": "#ffcc88",
        duration: 0.2,
      });
    });
  }
}
customElements.define('glow-button', GlowButton);