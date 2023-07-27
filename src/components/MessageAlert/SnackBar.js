import * as React from 'react';
import { useState } from 'react';
import { Snackbar } from 'react-native-paper';

const SnackBar = ({open=false,onPress,text}) => {
    const [visible,setVisible] = useState(open)

    const onDismissSnackBar = () => setVisible(false);

  return (
    <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
        label: 'Undo',
        onPress: () => {
            onPress?.()
        },
        }}>
        {text}
    </Snackbar>
  );
};
export default SnackBar;