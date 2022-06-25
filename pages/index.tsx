import { Button, Htag, Paragraph, Tag, Rating } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button arrow="right" appearance="primary">
        button
      </Button>
      <Button appearance="ghost">Text</Button>
      <Paragraph size="large">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, numquam!
      </Paragraph>
      <Paragraph size="small">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, numquam!
      </Paragraph>
      <Tag size="small" color="red" href="/">
        red
      </Tag>
      <Rating rating={4} />
    </>
  );
}
