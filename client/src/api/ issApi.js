const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 20000);

try {
  const res = await fetch("http://api.open-notify.org/iss-now.json", {
    signal: controller.signal,
  });

  const data = await res.json();
  console.log(data);
} finally {
  clearTimeout(timeout);
}
