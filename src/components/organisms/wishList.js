import React from 'react'
import Typography from '@material-ui/core/Typography'
import SearchWishList from './SearchWishList';

function wishList({imgsrc}) {
    return (
      <div>
        <img src={imgsrc}/>
        <Typography>
          upvote your favorite below or earch to add a new book:
        </Typography>
        <SearchWishList />
      </div>
    );
}

export default wishList
