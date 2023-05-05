import {Dispatch, useEffect, useState} from 'react';
import {Box, Button, Chip, IconButton, Modal, Paper, TextField, Typography} from "@mui/material";
import {Close} from '@mui/icons-material';
import {useCreateChatMutation, useGetUserChatsQuery} from "@/store/chatsApi";
import {RootState} from "@/store/store";
import {useSelector} from "react-redux";
import {useGetUsersQuery} from "@/store/usersApi";
import {UserDTO} from "@/store/apiTypes";
import {MultipleSelect} from "@/components/new-chat/UsersSelect";


type NewChatProps = {
    modalIsOpen: boolean;
    setModalIsOpen: Dispatch<boolean>;
};

export const NewChat = ({modalIsOpen, setModalIsOpen}: NewChatProps) => {
    const [newChatName, setNewChatName] = useState('');
    const [chatNameErrorMessage, setChatNameErrorMessage] = useState('');

    const [selectedUsers, setSelectedUsers] = useState<UserDTO[]>([]);

    const [createChat, createChatResult] = useCreateChatMutation()

    const {userId} = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        if (createChatResult.isSuccess) {
            setModalIsOpen(false)
        }
    }, [createChatResult])

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
                    sx={{position: 'absolute', right: 10, top: 10}}
                    onClick={() => {
                        setNewChatName('');
                        setModalIsOpen(false);
                    }}
                >
                    <Close/>
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
                    <Typography>Create new chat</Typography>
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
                    <MultipleSelect selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers}/>
                    <Button
                        variant={'contained'}
                        onClick={() => {
                            createChat({
                                owner: userId,
                                chatname: newChatName,
                                participants: [userId, ...selectedUsers.map((it) => it.id)]
                            })
                        }}
                    >
                        Create
                    </Button>
                </Box>
            </Paper>
        </Modal>
    );
};
