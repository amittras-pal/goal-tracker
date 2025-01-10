import {
  AppShell,
  Burger,
  createTheme,
  MantineProvider,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import GoalProvider from "../context/GoalProvider";
import ImportExport from "../modules/io";
import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import Navigation from "./Navigation";

export default function Layout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider
      theme={createTheme({ primaryColor: "indigo" })}
      defaultColorScheme="dark"
      withCssVariables
    >
      <GoalProvider>
        <AppShell
          header={{ height: 40 }}
          padding="md"
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
        >
          <AppShell.Header
            style={(theme) => ({
              display: "flex",
              alignItems: "center",
              gap: theme.spacing.sm,
              padding: theme.spacing.xs,
            })}
          >
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Text size="lg" fw="bold">
              Goal Tracker
            </Text>
            <ImportExport />
          </AppShell.Header>

          <AppShell.Navbar p="md">
            <Navigation toggle={toggle}/>
          </AppShell.Navbar>

          <AppShell.Main>
            <Outlet />
          </AppShell.Main>
        </AppShell>
      </GoalProvider>
    </MantineProvider>
  );
}
