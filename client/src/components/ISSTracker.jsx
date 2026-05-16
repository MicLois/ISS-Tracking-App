import { useEffect, useState } from "react";

function ISSTracker() {
  const [issData, setIssData] = useState(null);

  useEffect(() => {
    async function fetchISS() {
      try {
        const response = await fetch(
          "https://iss-tracking-app.onrender.com/api/iss",
        );

        const data = await response.json();
        setIssData(data);
      } catch (error) {
        console.error("Error fetching ISS data:", error);
      }
    }

    fetchISS();
  }, []);

  if (!issData) {
    return <p>Loading ISS data...</p>;
  }

  return (
    <div>
      <h2>ISS Tracker</h2>

      <p>Latitude: {issData.iss_position.latitude}</p>
      <p>Longitude: {issData.iss_position.longitude}</p>
    </div>
  );
}

export default ISSTracker;
