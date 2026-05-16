import { useEffect, useState } from "react";

function ISSTracker() {
  const [issData, setIssData] = useState(null);

  useEffect(() => {
    async function fetchISS() {
      const response = await fetch(
        "http://https://iss-tracking-app-client.onrender.com/",
      );

      const data = await response.json();

      setIssData(data);
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
