import { NativeBaseProvider, StatusBar } from "native-base";
import { SignIng } from './src/screens/SignIn';

export default function App() {
  return (
    <NativeBaseProvider>
      <SignIng />
      <StatusBar />
    </NativeBaseProvider>
  );
}

