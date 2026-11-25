document.querySelectorAll('.bazar-section').forEach(section => {
  const controls = section.querySelector('.post-controls');
  if (!controls) return;

  const posts = Array.from(section.querySelectorAll('.social-post'));
  const position = controls.querySelector('[aria-live]');
  let current = 0;

  function showPost(index) {
    current = (index + posts.length) % posts.length;
    posts.forEach((post, i) => { post.hidden = i !== current; });
    position.textContent = (current + 1) + ' / ' + posts.length;
  }

  controls.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => showPost(current + Number(button.dataset.step)));
  });
  showPost(0);
  controls.hidden = false;
});
