import { Box, Button } from "@mui/material"
import React from "react"

export const ShareComponent = () => {
  return (
    <React.Fragment>
      <Box>Show current image</Box>
      <Box>Modify share text</Box>

      <Button>Copy</Button>
      <Button>Twitter</Button>
    </React.Fragment>
  )
}