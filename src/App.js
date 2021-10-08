import React from "react";
import { Provider, defaultTheme, Button, ComboBox, Item, Section, TableView, TableBody, TableHeader, Row, Cell, Column, Flex} from "@adobe/react-spectrum";

let withSection = [
  {name: 'Animals', id: 's1', children: [
    {name: 'Aardvark', id: '1'},
    {name: 'Kangaroo', id: '2'},
    {name: 'Snake', id: '3'}
  ]},
  {name: 'People', id: 's2', children: [
    {name: 'Danni', id: '4'},
    {name: 'Devon', id: '5'},
    {name: 'Ross', id: '6'}
  ]}
];

function App() {
  return (
    <Provider theme={defaultTheme}>
      <Flex direction="column" width="size-3000">
        <Button variant={"primary"}>Click Me</Button>
        <ComboBox defaultItems={withSection} label="Combobox">
          {(item) => (
            <Section key={item.name} items={item.children} title={item.name}>
              {(item) => <Item key={item.name}>{item.name}</Item>}
            </Section>
          )}
        </ComboBox>
        <TableView aria-label="TableView with static contents" width={300} height={200}>
          <TableHeader>
            <Column key="foo">Foo</Column>
            <Column key="bar">Bar</Column>
            <Column key="baz">Baz</Column>
          </TableHeader>
          <TableBody>
            <Row>
              <Cell>One</Cell>
              <Cell>Two</Cell>
              <Cell>Three</Cell>
            </Row>
            <Row>
              <Cell>One</Cell>
              <Cell>Two</Cell>
              <Cell>Three</Cell>
            </Row>
          </TableBody>
        </TableView>
      </Flex>
    </Provider>
  );
}

export default App;
