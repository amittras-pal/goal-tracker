import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Navigation({ toggle }: { toggle: () => void }) {

  return (
    <>
      <Button
        mb="sm"
        variant="default"
        fullWidth
        component={Link}
        to="/tracker"
        onClick={toggle}
      >
        Goal Tracking
      </Button>
      <Button
        mb="sm"
        variant="default"
        fullWidth
        component={Link}
        to="/configurator"
        onClick={toggle}
      >
        Goal Configurator
      </Button>
    </>
  );
}
