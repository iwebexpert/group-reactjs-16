import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ListIcon from '@material-ui/icons/List';
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: '#ccc',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        borderRadius: '1em',
        '&:focus': {
            outline: 'none',
        },
    },
    icon: {
        color: "white",
    }
}));

export function ModalWindow(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlerRemove = () => {
        if (props.from === 'message') {
            const {messages, chatId, messageId} = props;
            messages.splice(messageId, 1);
            props.handlerRemoveMessage(chatId, messages);
        } else if (props.from === 'chat') {

            const {chatId, chats, handlerRemoveChat, redirect, handlerChangeChat} = props;
            handlerRemoveChat(chatId);

            let valuesChats = Object.values(chats);
            if (valuesChats.length) {
                const id = valuesChats[0]._id
                handlerChangeChat(null, id)
                redirect(`/chats/${id}`);
            }
        }
        handleClose();
    }

    return (
        <div>
            <IconButton aria-label="delete" className={classes.margin} size="small" onClick={handleOpen}>
                <ListIcon fontSize="inherit" className={classes.icon}/>
            </IconButton>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                            <Button>Edit (stub)</Button>
                            <Button onClick={handlerRemove}>Remove</Button>
                        </ButtonGroup>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}