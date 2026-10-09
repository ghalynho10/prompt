// Multiple-choice quiz. Markup: <div class="q" data-correct="b"><p>Question</p>
// <button data-k="a">..</button>... <p class="why">Explanation</p></div>
document.querySelectorAll('.q[data-correct]').forEach(q => {
  q.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
    const right = b.dataset.k === q.dataset.correct;
    q.querySelectorAll('button').forEach(x => x.classList.remove('right', 'wrong'));
    b.classList.add(right ? 'right' : 'wrong');
    const why = q.querySelector('.why');
    if (why) why.style.display = 'block';
    if (!right) b.title = 'Not quite: try another option';
  }));
});
