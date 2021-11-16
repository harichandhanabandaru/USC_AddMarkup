import React from 'react'
import Kindleinput  from '../../atoms/kindle/kindleinput'
import kindledropdown from '../../atoms/kindle/kindledropdown'
import Kindlehelpbtn from '../../atoms/Buttons/kindlehelpbtn'
import Typography from '@material-ui/core/Typography'
import Grid from "@material-ui/core/Grid";
import Kindlesent from './Kindlesent'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Box from '@material-ui/core/Box'


function Kindle() {
  return (
    <div>
      <Button >send to kindle </Button>
      <Modal>
        <Box>
          <Typography>Set up your Kindle</Typography>
          <Typography>related typography</Typography>
          <Grid>
            <Grid>
              <Grid item>
                <kindleinput />
              </Grid>
              <Grid item>
                <kindledropdown />
              </Grid>
            </Grid>
            <Grid>
              <Kindlesent />
            </Grid>
            <Grid>
              <kindlehelpbtn />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default Kindle
