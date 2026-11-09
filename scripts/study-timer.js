// Adapted from https://www.w3schools.com/js/js_timers.asp
// A study countdown uses setInterval and clearInterval with Start and Reset controls.
(() => {
 let timer = null;
 let deadline = 0;
 const output = document.getElementById('timerOutput');
 const start = document.getElementById('startTimer');
 function stop() { clearInterval(timer); timer = null; start.disabled = false; }
 start.addEventListener('click', () => {
  if (timer !== null) return;
  deadline = Date.now() + 60000; start.disabled = true;
  timer = setInterval(() => {
   const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
   output.textContent = remaining ? remaining + ' seconds remaining' : 'Break complete. Ready to practice?';
   if (remaining === 0) stop();
  }, 250);
 });
 document.getElementById('resetTimer').addEventListener('click', () => {stop(); output.textContent = '60 seconds remaining';});
})();
