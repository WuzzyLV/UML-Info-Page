import React from "react";
import { Drawer, Typography } from "@material-tailwind/react";

export function Navigation() {
  return (
    <header>
      <Drawer open={true} className="p-4" overlay={false}>
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            UML diagrammas
          </Typography>
        </div>
        <div></div>
      </Drawer>
    </header>
  );
}
