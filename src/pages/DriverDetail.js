import React, { useEffect } from "react";
import { useParams } from "react-router";

export default function DriverDetail() {
  const { driverId } = useParams();
  const fetchLink = "https://ergast.com/api/f1/2020/drivers/" + driverId + "/driverStandings.json"

  useEffect(() => {
    fetch(fetchLink)
      .then((response) => response.json())
      .then((data) => console.log(data));
  });

  return <div>Hello there {driverId}</div>;
}
