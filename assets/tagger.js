// Click-to-tag exercise. Markup:
// <div class="tagger"><span class="chunk" data-answer="node">Ada Lovelace</span>...
// <button class="check">Check</button><p class="result"></p></div>
// Clicking a chunk cycles: untagged -> node -> edge -> untagged.
const order = ['', 'node', 'edge'];
document.querySelectorAll('.tagger').forEach(t => {
  const chunks = [...t.querySelectorAll('.chunk')];
  chunks.forEach(c => {
    c.dataset.tag = '';
    c.addEventListener('click', () => {
      c.classList.remove('ok', 'no');
      const next = order[(order.indexOf(c.dataset.tag) + 1) % order.length];
      c.dataset.tag = next;
      c.classList.remove('node', 'edge');
      if (next) c.classList.add(next);
      c.title = next || 'untagged';
    });
  });
  t.querySelector('.check').addEventListener('click', () => {
    let good = 0;
    chunks.forEach(c => {
      const ok = c.dataset.tag === c.dataset.answer;
      c.classList.toggle('ok', ok);
      c.classList.toggle('no', !ok);
      if (ok) good++;
    });
    t.querySelector('.result').textContent =
      good === chunks.length ? 'All correct.' : `${good} of ${chunks.length} correct. Red outline = tag again.`;
  });
});
