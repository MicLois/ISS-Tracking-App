export async function getISSLocation() {
<<<<<<< HEAD
  const response = await fetch("https://iss-tracking-app-client.onrender.com/");
  //const response = await fetch("https://your-backend.onrender.com/iss");
  //const response = await fetch("http://api.open-notify.org/iss-now.json");
=======
  const response = await fetch("http://api.open-notify.org/iss-now.json");
>>>>>>> parent of be295c5 (Update  issApi.js)

  if (!response.ok) {
    throw new Error("Failed to fetch ISS data");
  }

  return response.json();
}
