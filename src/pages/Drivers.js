import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Typography } from "@material-ui/core";

export default function Drivers() {
  const [drivers, setDrivers] = useState(null);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/2020/drivers.json")
      .then((response) => response.json())
      .then((data) => {
        const driversdata = data.MRData.DriverTable.Drivers;
        setDrivers(driversdata);
      });
  }, []);

  return (
    <div>
      <Typography>Hello there</Typography>
      {drivers &&
        drivers.map((driver) => (
          <div key={driver.driverId}>
            {driver.givenName} {driver.familyName}
          </div>
        ))}
    </div>
  );
}
