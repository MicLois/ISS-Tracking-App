export async function getISSLocation() {
  const response = await fetch("http://api.open-notify.org/iss-now.json");

  if (!response.ok) {
    throw new Error("Failed to fetch ISS data");
  }

  return response.json();
}
