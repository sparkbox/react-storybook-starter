import * as React from "react";
import { shallow, render } from "enzyme";
import toJson from 'enzyme-to-json';

import Button from "../components/Button";

describe('the Button component', () => {
  it('matches the Snapshot', () => {
    const result = render(<Button text="Test Button" />);
    expect(toJson(result)).toMatchSnapshot();
  });

  it('renders a button element', () => {
      const result = shallow(<Button text="Test Button" />).contains(
        <button type="button">Test Button</button>
      );
      expect(result).toBeTruthy();
  });
});
