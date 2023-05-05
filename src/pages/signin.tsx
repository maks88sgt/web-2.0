import {Box, Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {useSinginMutation} from "@/store/authApi";
import {setUserId} from "@/store/auth/authActions";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";

export default function Index() {
    const [email, setEmail] = useState("");
    const [isUsernameError, setIsUsernameError] = useState("");

    const [password, setPassword] = useState("");
    const [isPasswordError, setIsPasswordError] = useState("");

    const [singin, signinResult] = useSinginMutation();

    const dispatch = useDispatch()

    const router = useRouter()

    useEffect(()=>{
        if (signinResult.isSuccess) {
            dispatch(setUserId({userId:signinResult.data.payload?.userId}))
            router.push("/chats")
        }
    }, [signinResult])


    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "space-around"
    }}>
        <Box>
            <TextField
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                label={"Enter email"}
                error={!!isUsernameError}
                onBlur={() => {
                    if (email.length < 3) {
                        setIsUsernameError("Username should contain at least 3 characters")
                    }
                }}
                onFocus={() => {
                    setIsUsernameError("")
                }}
                helperText={isUsernameError}
            />
            <TextField
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                label={"Enter password"}
                error={!!isPasswordError}
                onBlur={() => {
                    if (password.length < 8) {
                        setIsPasswordError("Password should contain at least 8 characters")
                    }
                    if (password.match(/^[a-zA-Z]+$/g)) {
                        setIsPasswordError("Password should contain only latin symbols and numbers")
                    }
                }}
                onFocus={() => {
                    setIsPasswordError("")
                }}
                helperText={isPasswordError}
            />
            <Button onClick={()=> {
                    singin({email, password})
            }}>Sign in</Button>
        </Box>
    </Box>
}
