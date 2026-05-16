export async function getISSLocation() {
  const response = await fetch("https://iss-tracking-app-client.onrender.com/");
  const response = await fetch("https://api.open-notify.org/iss-now.json");

  if (!response.ok) {
    throw new Error("Failed to fetch ISS data");
  }

  return response.json();
}
