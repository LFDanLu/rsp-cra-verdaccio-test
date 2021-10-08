import {Accordion} from '@react-spectrum/accordion';
import {ActionBar, ActionBarContainer} from '@react-spectrum/actionbar';
import {
  ActionButton,
  ActionGroup,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Cell,
  Checkbox,
  CheckboxGroup,
  Column,
  ComboBox,
  Content,
  defaultTheme,
  Dialog,
  DialogTrigger,
  Divider,
  Flex,
  Form,
  Header,
  Heading,
  Item,
  LogicButton,
  NumberField,
  Picker,
  Provider,
  Radio,
  RadioGroup,
  Row,
  SearchField,
  Section,
  Switch,
  TableBody,
  TableHeader,
  TableView,
  Text,
  TextArea,
  TextField,
  ToggleButton
} from '@adobe/react-spectrum';
import {Avatar} from '@react-spectrum/avatar';
import {ColorField, ColorSlider, ColorWheel} from '@react-spectrum/color';
import Copy from '@spectrum-icons/workflow/Copy';
import {countries, states} from './data';
import Delete from '@spectrum-icons/workflow/Delete';
import Duplicate from '@spectrum-icons/workflow/Duplicate';
import Edit from '@spectrum-icons/workflow/Edit';
import Move from '@spectrum-icons/workflow/Move';
import React, {useState} from 'react';
import {SearchAutocomplete} from '@react-spectrum/autocomplete';
import {SearchWithin} from '@react-spectrum/searchwithin';

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
const SRC_URL_1 = 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/690bc6105945313.5f84bfc9de488.png';

function App() {
  return (
    <Provider theme={defaultTheme}>
      <Flex direction="column" width="80%" margin="auto" gap="size-200">
        <Accordion>
          <Item key="files" title="Your files">
            files
          </Item>
          <Item key="shared" title="Shared with you">
            shared
          </Item>
          <Item key="last" title="Last item">
            last
          </Item>
        </Accordion>
        <ExampleActionBar />
        <ActionGroup>
          <Item key="add">Add</Item>
          <Item key="delete">Delete</Item>
          <Item key="edit">Edit</Item>
        </ActionGroup>
        <Avatar src={SRC_URL_1} />
        <Flex gap="size-200">
          <ActionButton>Action Button</ActionButton>
          <Button variant={"primary"}>Click Me</Button>
          <LogicButton variant="and">Logic Button</LogicButton>
          <ToggleButton>
            <Text>ToggleButton</Text>
          </ToggleButton>
        </Flex>
        <ButtonGroup maxWidth="100vw">
          <Button variant="primary">Button 1</Button>
          <Button variant="negative">Button long long long name</Button>
          <Button variant="primary" isQuiet>Quiet button</Button>
          <Button variant="primary" isDisabled>Disabled button</Button>
        </ButtonGroup>
        <Breadcrumbs>
          <Item key="Folder 1">The quick brown fox jumps over</Item>
          <Item key="Folder 2">My Documents</Item>
          <Item key="Folder 3">Kangaroos jump high</Item>
        </Breadcrumbs>
        <CheckboxGroup label="Pets">
          <Checkbox value="dogs">Dogs</Checkbox>
          <Checkbox value="cats">Cats</Checkbox>
          <Checkbox value="dragons">Dragons</Checkbox>
        </CheckboxGroup>
        <ColorField label="Primary Color" />
        <ColorSlider defaultValue="#7f0000" channel={'red'} />
        <ColorWheel defaultValue="hsl(0, 100%, 50%)')" />
        <ComboBox defaultItems={withSection} label="Combobox">
          {(item) => (
            <Section key={item.name} items={item.children} title={item.name}>
              {(item) => <Item key={item.name}>{item.name}</Item>}
            </Section>
          )}
        </ComboBox>
        <DialogTrigger>
          <ActionButton>Trigger</ActionButton>
          {(close) => (
            <Dialog>
              <Heading>The Heading</Heading>
              <Header>The Header</Header>
              <Divider />
              <Content>Test content</Content>
              <ButtonGroup>
                <Button variant="secondary" onPress={close}>Cancel</Button>
                <Button variant="cta" onPress={close}>Confirm</Button>
              </ButtonGroup>
            </Dialog>
          )}
        </DialogTrigger>
        <Divider />
        <Form>
          <NumberField label="Years lived there" />
          <Picker label="State" placeholder="Select a state" items={states}>
            {item => <Item key={item.abbr}>{item.name}</Item>}
          </Picker>
          <Picker label="Country" placeholder="Select a country" items={countries}>
            {item => <Item key={item.name}>{item.name}</Item>}
          </Picker>
          <Picker label="Favorite color" description="Select any color you like." errorMessage="Please select a nicer color.">
            <Item>Red</Item>
            <Item>Orange</Item>
            <Item>Yellow</Item>
            <Item>Green</Item>
            <Item>Blue</Item>
            <Item>Purple</Item>
          </Picker>
          <RadioGroup label="Favorite pet" name="favorite-pet-group">
            <Radio value="dogs">Dogs</Radio>
            <Radio value="cats">Cats</Radio>
            <Radio value="dragons">Dragons</Radio>
          </RadioGroup>
          <SearchField label="Search" />
          <SearchWithin label="Search cities">
            <SearchField placeholder="City" />
            <Picker label="State" placeholder="Select a state" items={states}>
              {item => <Item key={item.abbr}>{item.name}</Item>}
            </Picker>
          </SearchWithin>
          <Switch>Low power mode</Switch>
          <TextArea label="Comments" placeholder="How do you feel?" description="Express yourself!" errorMessage="No wrong answers, except for this one." />
          <TextField label="City" placeholder="San Francisco" />
          <TextField label="Zip code" placeholder="12345" description="Please enter a five-digit zip code." errorMessage="Please remove letters and special characters." />
        </Form>

        <SearchAutocomplete defaultItems={withSection} label="SearchAutocomplete">
          {(item) => (
            <Section key={item.name} items={item.children} title={item.name}>
              {(item) => <Item key={item.name}>{item.name}</Item>}
            </Section>
          )}
        </SearchAutocomplete>
      </Flex>
    </Provider>
  );
}

let columns = [
  {name: 'Foo', key: 'foo'},
  {name: 'Bar', key: 'bar'},
  {name: 'Baz', key: 'baz'}
];

let items = [
  {test: 'Test 1', foo: 'Foo 1', bar: 'Bar 1', yay: 'Yay 1', baz: 'Baz 1'},
  {test: 'Test 2', foo: 'Foo 2', bar: 'Bar 2', yay: 'Yay 2', baz: 'Baz 2'},
  {test: 'Test 1', foo: 'Foo 3', bar: 'Bar 1', yay: 'Yay 1', baz: 'Baz 1'},
  {test: 'Test 2', foo: 'Foo 4', bar: 'Bar 2', yay: 'Yay 2', baz: 'Baz 2'},
  {test: 'Test 1', foo: 'Foo 5', bar: 'Bar 1', yay: 'Yay 1', baz: 'Baz 1'},
  {test: 'Test 2', foo: 'Foo 6', bar: 'Bar 2', yay: 'Yay 2', baz: 'Baz 2'},
  {test: 'Test 1', foo: 'Foo 7', bar: 'Bar 1', yay: 'Yay 1', baz: 'Baz 1'},
  {test: 'Test 2', foo: 'Foo 8', bar: 'Bar 2', yay: 'Yay 2', baz: 'Baz 2'},
  {test: 'Test 1', foo: 'Foo 9', bar: 'Bar 1', yay: 'Yay 1', baz: 'Baz 1'},
  {test: 'Test 2', foo: 'Foo 10', bar: 'Bar 2', yay: 'Yay 2', baz: 'Baz 2'},
  {test: 'Test 1', foo: 'Foo 11', bar: 'Bar 1', yay: 'Yay 1', baz: 'Baz 1'},
  {test: 'Test 2', foo: 'Foo 12', bar: 'Bar 2', yay: 'Yay 2', baz: 'Baz 2'},
  {test: 'Test 1', foo: 'Foo 13', bar: 'Bar 1', yay: 'Yay 1', baz: 'Baz 1'},
  {test: 'Test 2', foo: 'Foo 14', bar: 'Bar 2', yay: 'Yay 2', baz: 'Baz 2'},
  {test: 'Test 1', foo: 'Foo 15', bar: 'Bar 1', yay: 'Yay 1', baz: 'Baz 1'},
  {test: 'Test 2', foo: 'Foo 16', bar: 'Bar 2', yay: 'Yay 2', baz: 'Baz 2'}
];

export function ExampleActionBar(props = {}) {
  const [selectedKeys, setSelectedKeys] = useState(props.defaultSelectedKeys || new Set());
  return (
    <ActionBarContainer height={props.containerHeight || 300}>
      <TableView
        aria-label="Table"
        isQuiet={props.isQuiet}
        width={props.tableWidth}
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        onSelectionChange={(keys) => setSelectedKeys(keys)}>
        <TableHeader columns={columns}>
          {column => <Column>{column.name}</Column>}
        </TableHeader>
        <TableBody items={items}>
          {item =>
            (<Row key={item.foo}>
              {key => <Cell>{item[key]}</Cell>}
            </Row>)
          }
        </TableBody>
      </TableView>
      <ActionBar
        selectedItemCount={selectedKeys === 'all' ? selectedKeys : selectedKeys.size}
        onClearSelection={() => {
          setSelectedKeys(new Set());
        }}
        {...props}>
        <Item key="edit">
          <Edit />
          <Text>Edit</Text>
        </Item>
        <Item key="copy">
          <Copy />
          <Text>Copy</Text>
        </Item>
        <Item key="delete">
          <Delete />
          <Text>Delete</Text>
        </Item>
        <Item key="move">
          <Move />
          <Text>Move</Text>
        </Item>
        <Item key="duplicate">
          <Duplicate />
          <Text>Duplicate</Text>
        </Item>
      </ActionBar>
    </ActionBarContainer>
  );
}

export default App;
