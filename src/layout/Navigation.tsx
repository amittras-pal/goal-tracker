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
        Track Goals
      </Button>
      <Button
        mb="sm"
        variant="default"
        fullWidth
        component={Link}
        to="/configurator"
        onClick={toggle}
      >
        Create / Change Goals
      </Button>
      <Button
        mb="sm"
        variant="default"
        fullWidth
        component={Link}
        to="/io"
        onClick={toggle}
      >
        Import / Export Goals
      </Button>
    </>
  );
}
