import { ChatListItem } from '../chat-list-item/ChatListItem';
import {Box} from "@mui/material";


export const ChatsList = ({ chats }: { chats: {
        _id: string;
        chatname: string;
        participants: string[];
        messages: string[];
    }[] }) => {

    return (
        <Box
            sx={{
                my: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                overflowY: 'auto',
                maxHeight: '80vh',
                scrollbarColor: 'teal',
                '&::-webkit-scrollbar': { width: '3px' },
                '&::-webkit-scrollbar-thumb': { background: 'teal.900' },
                '&::-webkit-scrollbar-track': { background: 'teal.400' },
                pl: '10px',
            }}
        >
            {chats.map((item) => {
                return (
                    <ChatListItem
                        key={item._id}
                        chatId={item._id}
                        chatName={item.chatname}
                        unreadMessagesCount={1}
                        onClick={() => {}}
                    />
                );
            })}
        </Box>
    );
};
