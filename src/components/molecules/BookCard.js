import React from 'react'
import BookImage from '../atoms/BookImage'
import Card from '@material-ui/core/card'
import {CardContent,CardMedia} from '@material-ui/core/card'
import Typography from '@material-ui/core/Typography'

function BookCard({book}) {
    return (
      <div>
        <Card>
          <CardMedia image={book.img} />
          <CardContent>
            
            <Typography> {book.name}</Typography>
            <Typography> {book.author}</Typography>
            <Typography>
              {/* time icon */}
              {book.time} -minutes read
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
}

export default BookCard
