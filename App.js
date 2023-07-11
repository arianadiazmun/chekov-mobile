import { NativeBaseProvider, Box, Text } from "native-base";
import { useState } from "react";
import Login from "./app/Login";
import TodoList from "./app/TodoList";
export default function App() {


  const [user, setUser]=useState();
  return (
    <NativeBaseProvider>
      <Box bg="pink.700" alignItems="center" justifyContent="center" flex={1}>
        <Text color="coolGray.200" fontSize='4xl'>Chekov Todo</Text>
        {!user
        ? <Login setUser={setUser} />
        : <TodoList user={user}/>
      
      }
      </Box>
    </NativeBaseProvider>
  );
}
