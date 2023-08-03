const loading = document.getElementById("loading");

const loadingDuration = 8000; // 2s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);
