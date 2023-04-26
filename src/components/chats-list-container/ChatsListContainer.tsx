import { useContext, useEffect, useState } from 'react';
import { ChatsList } from '../chats-list/ChatsList';
import {Box, Button, Input} from "@mui/material";
import {NewChat} from "@/components/new-chat/NewChat";


export const ChatsListContainer = () => {
    const listOfChats: {chatname: string; }[] = [];

    const [search, setSearch] = useState('');
    const [filteredChats, setFilteredChats] = useState(listOfChats);

    useEffect(() => {
        if (search) {
            setFilteredChats(
                listOfChats?.filter((item) =>
                    item.chatname.toLowerCase().includes(search.toLowerCase()),
                ),
            );
        } else {
            setFilteredChats(listOfChats);
        }
    }, [search, listOfChats]);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <Box
            sx={{
                width: '40%',
                backgroundColor: 'cyan.50',
                p: '20px',
                position: 'relative',
            }}
        >
            <Input
                sx={{ px: '10px', backgroundColor: 'white' }}
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
                placeholder={'Search chat by name'}
            />
            <ChatsList chats={filteredChats} />
            <Button
                variant={"contained"}
                sx={{ position: 'absolute', bottom: '20px', right: '20px' }}
                onClick={() => setModalIsOpen(true)}
            >
                Add new chat
            </Button>
            <NewChat
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
            />
        </Box>
    );
};
