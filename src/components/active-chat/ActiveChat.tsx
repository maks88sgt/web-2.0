import {Box, Button, Input, Typography} from '@mui/material';
import { useState } from 'react';
import { MessageItem } from '../message-item/MessageItem';
import {RootState} from "@/store/store";
import {useSelector} from "react-redux";

export const ActiveChat = () => {
    const [newMessage, setNewMessage] = useState('');

    const selectedChat = useSelector((state: RootState)=> state.chat.selectedChat)

    return (
        <Box
            sx={{
                width: '100%',
                maxHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                p: '20px',
                alignItems: 'center',
                backgroundColor: 'teal.50',
              position: "relative"
            }}
        >
            {selectedChat ? (
                <>
                    <Typography
                        sx={{ fontSize: '30px' }}
                    >{`Chat name: ${selectedChat.chatname}`}</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '10px',
                            fontSize: '20px',
                            justifyContent: 'flex-start',
                            width: '100%',
                        }}
                    >
                        <Box>Participants: </Box>
                        {selectedChat?.participants.map((user) => (
                            <Box
                                sx={{
                                    backgroundColor: 'teal.100',
                                    borderRadius: 'full',
                                    border: '1px solid teal',
                                    px: '20px',
                                    textAlign: 'center',
                                }}
                                key={user}
                            >
                                {user}
                            </Box>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            overflowY: 'auto',
                            scrollbarColor: 'teal',
                            '&::-webkit-scrollbar': { width: '3px' },
                            '&::-webkit-scrollbar-thumb': {
                                background: 'teal.900',
                            },
                            '&::-webkit-scrollbar-track': {
                                background: 'teal.400',
                            },
                            maxHeight: '80vh',
                            width: '100%',
                        }}
                    >
                        {selectedChat.messages?.map((message: any) => {
                            return (
                                <MessageItem
                                    key={message.author + message.timestamp}
                                    body={message.body}
                                    author={message.author}
                                    timestamp={message.timestamp}
                                />
                            );
                        })}
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'grid',
                            gridTemplateColumns: '4fr 1fr',
                            gap: '10px',
                          position: "absolute",
                          bottom: 0,
                          right: 0, p: "20px"
                        }}
                    >
                        <Input
                            sx={{ px: '10px', backgroundColor: 'white' }}
                            value={newMessage}
                            placeholder={'Enter your message'}
                            onChange={(ev) => setNewMessage(ev.target.value)}
                        />
                        <Button
                            variant={"contained"}
                            sx={{ px: '10px' }}
                            onClick={() => {}}
                        >
                            Send message
                        </Button>
                    </Box>
                </>
            ) : (
                <Box width={'100%'}>Select a chat in the left side</Box>
            )}
        </Box>
    );
};
