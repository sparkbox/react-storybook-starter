import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

storiesOf('Button', module).add('with text', () => <Button text="I'm a Button!" />);
