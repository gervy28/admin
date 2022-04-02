let signIn = document.getElementById('sign-in');
let loading = document.getElementById('loading');

document.getElementById('form').addEventListener("submit", () => {
  signIn.style.display = "none";
  loading.style.display="flex";
  setTimeout(() => {
    window.location.assign("http://127.0.0.1:5500/april-fools.html")
  }, );
});