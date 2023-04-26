import { Box } from '@mui/material'
import {ActiveChat} from "@/components/active-chat/ActiveChat";
import {ChatsListContainer} from "@/components/chats-list-container/ChatsListContainer";

export default function Home() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '80vw',
                height: '100vh',
                justifyContent: 'space-around',
                m: '0 auto',
                border: 'solid 1px teal',
            }}
        >
                    <ChatsListContainer />
                    <ActiveChat />
        </Box>
    );
}
