import {
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
} from "native-base";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./fbConfig.js";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response.user);
      })
      .catch((err) => alert(err.message));
  };
  
  return (
    <Center w="100%">
      <Box safeArea p={2} py={8} w="90%" maxW={290}>
        <Heading size="lg" fontWeight="600" color="coolGray.100">
          Welcome
        </Heading>
        <Heading mt={1} color="coolGray.400" fontWeight="medium" size="xs">
          Sign in to continue...
        </Heading>
        <VStack space={3} mt={5}>
          <FormControl isRequired>
            <FormControl.Label color="coolGray.300">Email</FormControl.Label>
            <Input
              onChange={setEmail}
              size="lg"
              color="coolGray.200"
              placeholder="example@email.com"
            />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label color="coolGray.300">Password</FormControl.Label>
            <Input
              onChange={setPassword}
              size="lg"
              color="coolGray.200"
              type="password"
            />
          </FormControl>
          <Button onPress={handleLogin} mt={3} colorScheme="primary">
            Sign In
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
