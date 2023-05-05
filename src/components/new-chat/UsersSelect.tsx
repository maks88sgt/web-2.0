import * as React from 'react';
import {Theme, useTheme} from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useGetUsersQuery} from "@/store/usersApi";
import {UserDTO} from "@/store/apiTypes";
import {Dispatch} from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


export function MultipleSelect({
                                   selectedUsers,
                                   setSelectedUsers
                               }: { selectedUsers: UserDTO[], setSelectedUsers: Dispatch<UserDTO[]> }) {
    const theme = useTheme();

    const {data} = useGetUsersQuery()

    const handleChange = (event: any) => {
        const {
            target: { value },
        } = event;
        setSelectedUsers(data?.payload?.users.filter(it=>{return value.includes(it.username)}) ?? [])
    };

    return (
        <div>
            <FormControl sx={{m: 1, width: 300}}>
                <InputLabel id="demo-multiple-name-label">Name</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={selectedUsers.map(it=>it.username)}
                    input={<OutlinedInput label="Name"/>}
                    MenuProps={MenuProps}
                    onChange={handleChange}
                >
                    {data?.payload?.users?.map((user) => (
                        <MenuItem
                            key={user.id}
                            value={user.username}
                        >
                            {user.username}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
