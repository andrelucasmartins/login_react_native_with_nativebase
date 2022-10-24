import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import {
  Box,
  Center,
  FormControl,
  Heading,
  Input,
  Icon,
  Button,
  Checkbox,
  VStack,
  HStack,
  WarningOutlineIcon,
  Avatar,
  Switch,
  Text,
  useColorMode,
} from 'native-base'
import { Pressable } from 'react-native'

export function SignIng() {
  const [show, setShow] = React.useState(false)
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Center
      height="full"
      _dark={{ bg: "gray.900" }}
      _light={{ bg: "white" }}
    >
      <Avatar
        size={150}
        bg="purple.500"
        source={{ uri: 'https://github.com/andrelucasmartins.png' }}
      >
        AE
      </Avatar>
      <VStack
        width={'full'}
        px={10}
      >
        <Box width={'full'}>
          <Heading
            color={'coolGray.700'}
            _dark={{ color: "white" }}
            _light={{ color: "black" }}
          >
            Entrar
          </Heading>

          <FormControl isRequired>
            <FormControl.Label>E-mail</FormControl.Label>
            <Input
              placeholder='seu@email.com.br'
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml={2}
                  color="muted.400"
                />
              }
            />

            {/* <FormControl.HelperText>
              Você precisa digitar o e-mail cadastrado!
            </FormControl.HelperText> */}
            <FormControl.ErrorMessage
              leftIcon={
                <WarningOutlineIcon size='xs' />
              }
            >
              E-mail inválido
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired>
            <FormControl.Label>Senha</FormControl.Label>
            <Input
              placeholder='sua senha'
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="lock" />}
                  size={5}
                  ml={2}
                  color="muted.400"
                />
              }
              type={show ? "text" : "password"}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"} />}
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }

            />
          </FormControl>

          <Button
            mt="7"
            colorScheme={'purple'}
          >
            Entrar
          </Button>

          <HStack mt={5}>
            <Checkbox
              value='agree'
              colorScheme="purple"
            >
              Concordo com a politica de segurança
            </Checkbox>
          </HStack>
        </Box>
        <HStack
          alignItems={'center'}
          space={4}
          alignContent="center"
        >
          <Text>Dark</Text>
          <Switch
            isChecked={colorMode === "light"}
            colorScheme="indigo"
            onToggle={toggleColorMode}
            aria-label={
              colorMode === "light" ? "troque para o tema escuro" : "Troque para o tema claro"
            }
          />
          <Text>Light</Text>
        </HStack>
      </VStack>
    </Center>
  )
}