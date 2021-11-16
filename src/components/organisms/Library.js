import React,{useState} from 'react'
import BookCard from '../molecules/BookCard'
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/icons'

function BookGrid() {
    return (
      <div>
        <Typography>My Library</Typography>
        <Grid>
            <Grid item >
                <BookCard />
            </Grid>
        </Grid>
      </div>
    );
}

export default BookGrid;
