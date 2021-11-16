import React from 'react'
import Kindle from '../Kindle/Kindle'
import BookDetailsTabs from '../../molecules/BookDetailsTabs'
import BookImage from '../../atoms/BookImage'
import Grid from '@material-ui/icons/Grid'
import Typography from '@material-ui/icons/Typography'

function BookDetails() {
        return (
        <div>
            <Grid>
                <Grid item>
                    <Typography>Book name</Typography>
                    <Typography>Book tagline</Typography>
                    <Typography>Authors</Typography>
                    {/* Icon labels */}
                    {/* Buttons in a grid  */}

                    <Kindle/>
                    
                    <BookDetailsTabs/>
                </Grid>
                <Grid item>
                    <BookImage/>
                </Grid>
           </Grid>
        </div>
    )
}

export default BookDetails
