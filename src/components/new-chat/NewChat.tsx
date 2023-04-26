import { Dispatch, useState } from 'react';
import {Box, Button, IconButton, Modal, Paper, TextField, Typography} from "@mui/material";
import { Close } from '@mui/icons-material';
import {useCreateChatMutation} from "@/store/chatsApi";


type NewChatProps = {
    modalIsOpen: boolean;
    setModalIsOpen: Dispatch<boolean>;
};

export const NewChat = ({ modalIsOpen, setModalIsOpen }: NewChatProps) => {
    const [newChatName, setNewChatName] = useState('');
    const [chatNameErrorMessage, setChatNameErrorMessage] = useState('');

    const [selectedUsers, setSelectedUsers] = useState([]);

    const [createChat] = useCreateChatMutation()

    return (
        <Modal
            open={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                display: 'flex',
                width: '100vw',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Paper
                sx={{
                    minWidth: '50vw',
                    padding: '80px',
                    position: 'relative',
                }}
            >
                <IconButton
                    sx={{ position: 'absolute', right: 10, top: 10 }}
                    onClick={() => {
                        setNewChatName('');
                        setModalIsOpen(false);
                    }}
                >
                    <Close />
                </IconButton>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '48px',
                        justifyContent: 'center',
                    }}
                >
                    <Typography>Создать новый чат</Typography>
                    <TextField
                        label={'Chat name'}
                        aria-describedby="username-helper-text"
                        variant={'outlined'}
                        helperText={chatNameErrorMessage}
                        error={!!chatNameErrorMessage}
                        autoComplete={'off'}
                        value={newChatName}
                        onFocus={() => setNewChatName('')}
                        onChange={(ev) => {
                            setNewChatName(ev.target.value);
                        }}
                        fullWidth={true}
                    />
                    <Button
                        variant={'contained'}
                        onClick={() => {
                        }}
                    >
                        Создать новый чат
                    </Button>
                </Box>
            </Paper>
        </Modal>
    );
};
