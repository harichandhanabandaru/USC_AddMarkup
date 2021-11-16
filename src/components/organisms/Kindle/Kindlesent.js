import React from 'react'
import kindlecontinuereadingbtn from '../../atoms/Buttons/kindlecontinuereadingbtn'
import Typography from '@material-ui/icons/Typography'
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";

function Kindlesent(props) {
  return (
    <div>
      <Button >Add email</Button>

      <Modal >
        <Box>
          <Typography>The grid</Typography>
          <Typography> Heading and conetent </Typography>
          <Typography> below heading text </Typography>

          <Button > continue Reading</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default Kindlesent
