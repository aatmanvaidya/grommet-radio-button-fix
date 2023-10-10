import React, { useState, useContext } from "react";
import {
  Box,
  grommet,
  Grommet,
  Text,
  Form,
  FormField,
  RadioButtonGroup,
  RadioButton
} from "grommet";
import { deepMerge } from "grommet/utils";

const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
  },
});

const App = () => {
  const [selectedOption, setSelectedOption] = useState(true);

  const handleSubmit = () => {
    console.log('Selected option:', selectedOption);
  };

  return (
    <Grommet theme={theme} full>
      <Box align="center" pad="large">
        <Text>testing RadioButtonGroup</Text>
        <Form
          onSubmit={handleSubmit}
          onChange={(nextValue) => setSelectedOption(nextValue)}
        >
          <FormField name="question" label="Question" required>
            <RadioButtonGroup
              name="question"
              options={[
                { label: "Yes", value: true },
                { label: "No", value: false },
              ]}
            />
          </FormField>
          <button type="submit">Submit</button>
        </Form>
      </Box>
      {/* <Box align="center" pad="large">
        <Form onSubmit={handleSubmit}>
          <FormField name="question" label="Question">
            <RadioButton
              name="question"
              label="Yes"
              value={true}
              checked={selectedOption === true}
              onChange={() => setSelectedOption(true)}
            />
            <RadioButton
              name="question"
              label="No"
              value={false}
              checked={selectedOption === false}
              onChange={() => setSelectedOption(false)}
            />
          </FormField>
          <button type="submit">Submit</button>
        </Form>
      </Box> */}
    </Grommet>
  );
};

export default App;
