import * as React from 'react';
import { Button, Dialog } from 'react-native-paper';

const PaperDialog = (props) => {

    const hideDialog = () =>{
        props?.onClose?.()
    }

    const saveAction = () =>{
        props?.onAction?.()
    }

    return (
        <Dialog visible={props?.visible} onDismiss={hideDialog}>
            <Dialog.Title>{props?.title}</Dialog.Title>
            <Dialog.Content>
                {props?.renderContent}
            </Dialog.Content>
            <Dialog.Actions>
            <Button onPress={saveAction}>{props?.actionLabel}</Button>
            </Dialog.Actions>
        </Dialog>
    );
};

export default PaperDialog;