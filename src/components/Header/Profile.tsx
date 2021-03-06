import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData ?: boolean
}

export function Profile({ showProfileData = true }) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Bruno Toresan</Text>
          <Text color="gray.300" fontSize="small">
            brunotoresan@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Bruno Toresan" src="https://github.com/brunotoresan.png" />
    </Flex>
  )
}