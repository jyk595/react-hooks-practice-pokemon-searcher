import { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({formSubmit, formChange}) {
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={formSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={formChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={formChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={formChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={formChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
