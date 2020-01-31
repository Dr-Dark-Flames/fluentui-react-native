import * as React from 'react';
import { Stack } from '../components';
import { Button } from '../components';
import { stackStyle } from './TesterStyles';
import { IFocusable } from '../hooks';

export const ButtonTest: React.FunctionComponent<{}> = () => {
  const [state, setState] = React.useState({
    focused: false,
  });
  const buttonRef = React.useRef<IFocusable>(null);

  const onFocus = React.useCallback(() => {
    setState({ focused: !state.focused });
    if (buttonRef.current && !state.focused) {
      buttonRef.current.focus();
    }
  }, [state, setState]);

  return (
    <Stack style={ stackStyle }>
      <Button content={ state.focused ? 'Focused' : 'Not Focused' } componentRef={ buttonRef } accessibilityLabel='overridden button name' />
      <Button content="Click to focus" onPress={ onFocus } />
    </Stack>
  );
};