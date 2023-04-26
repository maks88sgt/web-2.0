import { Box } from '@mui/material';

export const ChatListItem = ({
    chatName,
    unreadMessagesCount,
    onClick,
}: {
    chatName: string;
    unreadMessagesCount: number;
    onClick: () => void;
    chatId: string;
}) => {


    return (
        <Box sx={{ mr: '10px' }}>
            <Box
                sx={{
                    width: '100%',
                    height: 'auto',
                    border: 'solid 1px teal',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    px: '10px',
                    cursor: 'pointer',
                }}
                onClick={onClick}
            >
                <Box
                    sx={{ width: '70%', display: 'flex', flexWrap: 'no-wrap' }}
                >
                    {chatName}
                </Box>
                {unreadMessagesCount ? (
                    <Box
                        sx={{
                            minHeight: 'auto',
                            minWidth: '25px',
                            borderRadius: 'full',
                            backgroundColor: 'teal.500',
                            color: 'white',
                            fontWeight: 'bold',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {unreadMessagesCount}
                    </Box>
                ) : null}
            </Box>
        </Box>
    );
};
