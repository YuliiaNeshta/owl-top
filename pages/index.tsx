import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button arrow="right" appearance="primary">
        button
      </Button>
      <Button appearance="ghost">Text</Button>
    </>
  );
}
