(() => {
  const graphics = [
    ['Project Brief and Success Criteria', '01-project-brief.png'],
    ['Plans and Design Choices', '02-plans.png'],
    ['Work Health and Safety', '03-whs.png'],
    ['Timber Selection and Preparation', '04-timber.png'],
    ['Measuring and Marking Out', '05-markout.png'],
    ['Legs, Rails and Joinery', '06-joinery.png'],
    ['Frame Assembly and Squareness', '07-assembly.png'],
    ['Drawer or Approved Storage Component', '08-storage.png'],
    ['Top Fitting and Timber Movement', '09-top.png'],
    ['Surface Preparation and Finish', '10-surface-finish.png'],
    ['Problem-solving and Adjustments', '11-problem-solving.png'],
    ['Final Evaluation', '12-final-evaluation.png']
  ];

  function addInfographics() {
    const cards = document.querySelectorAll('#folioCards .folio-card');
    cards.forEach((card, index) => {
      const graphic = graphics[index];
      const header = card.querySelector('.folio-head');
      if (!graphic || !header || card.querySelector('.folio-card-graphic')) return;

      const figure = document.createElement('figure');
      figure.className = 'folio-card-graphic';
      figure.innerHTML = `
        <img src="assets/folio/cards/${graphic[1]}" alt="${graphic[0]} infographic" loading="lazy" decoding="async">
        <figcaption>Use this visual to help you identify the evidence and explanation needed for this stage.</figcaption>
      `;
      header.insertAdjacentElement('afterend', figure);
    });
  }

  function start() {
    requestAnimationFrame(addInfographics);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
