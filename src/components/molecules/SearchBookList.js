import React from 'react'
import Grid from '@material-ui/core/Grid'

function SearchBookList(book) {
    return (
      <div>
        <Grid>
          <Grid item>{book.title}</Grid>
          <Grid item>{book.author}</Grid>
        </Grid>
      </div>
    );
}

export default SearchBookList
