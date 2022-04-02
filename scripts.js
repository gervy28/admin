let signIn = document.getElementById('sign-in');
let loading = document.getElementById('loading');

document.getElementById('form').addEventListener("submit", () => {
  signIn.style.display = "none";
  loading.style.display="flex";
  setTimeout(() => {
    window.location.assign("https://gervy28.github.io/admin/april-fools.html")
  }, );
});
