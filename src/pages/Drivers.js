import React, { useState, useEffect } from "react";
import { Box, Container } from "@material-ui/core";
import DriverData from "../components/DriverData";

export default function Drivers() {
  const [drivers, setDrivers] = useState(null);

  useEffect(() => {
    fetch("https://ergast.com/api/f1/2020/drivers.json")
      .then((response) => response.json())
      .then((data) => {
        const driversdata = data.MRData.DriverTable.Drivers;
        // console.log(driversdata);
        setDrivers(driversdata);
      });
  }, []);

  return (
    <div>
      <Box mt={3}>
        {drivers && (
          <Container>
            {drivers.map((driver) => (
              <DriverData key={driver.driverId} driver={driver} />
            ))}
          </Container>
        )}
      </Box>
    </div>
  );
}
