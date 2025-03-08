import {
    Box,
    Button,
    Code,
    Dialog,
    Flex,
    Grid,
    Strong,
    Text,
    TextField,
} from "@radix-ui/themes";
import { useState } from "react";
import useDebounce from "../../../Hooks/useDebounse";
import UserCard from "../../User/UserCard";

export type UserEditDialogProps = {
    onSave: (username: string) => void;
    open: boolean;
};

export default function WelcomeUserDialog({ onSave, open }: UserEditDialogProps) {
    const [username, setUsername] = useState("");
    const debouncedUsername = useDebounce(username, 300);

    return (
        <Dialog.Root open={open}>
            <Dialog.Content maxWidth="700px">
                <Dialog.Title>Привет 👋</Dialog.Title>

                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        onSave(username);
                    }}
                >
                    <Grid columns="2" gap="5">
                        <Box>
                            <Text mb="3" as="div">
                                Добро пожаловать в <Strong>JS Learner!</Strong>
                            </Text>

                            <Text>
                                Это приложение поможет тебе изучить некоторые
                                тонкости языка <Code>JavaScript</Code>. Проверь
                                свои навыки или узнай что-то новое проходя
                                уровни и ежедневные задачи!
                            </Text>
                        </Box>

                        <Box>
                            <Flex direction="column" gap="3">
                                <label>
                                    <Text
                                        as="div"
                                        size="2"
                                        mb="1"
                                        weight="bold"
                                    >
                                        Представься:
                                    </Text>
                                    <TextField.Root
                                        placeholder="Никнейм"
                                        onChange={(ev) =>
                                            setUsername(ev.target.value)
                                        }
                                    />
                                </label>

                                <Box mt="3">
                                    <UserCard
                                        username={debouncedUsername}
                                        placeholder="Никнейм"
                                    />
                                </Box>
                            </Flex>
                        </Box>
                    </Grid>

                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button type="submit">Продолжить</Button>
                        </Dialog.Close>
                    </Flex>
                </form>
            </Dialog.Content>
        </Dialog.Root>
    );
}
