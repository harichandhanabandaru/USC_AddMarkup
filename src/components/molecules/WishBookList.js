import React from 'react'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import {ListItem,ListItemText} from '@material-ui/core/ListItem'

function WishBookList(bookitem) {
    return (
        <div>
            <Grid>
                <Grid>{bookitem.upVoteCount}</Grid>
                <Grid src={bookitem.image}/>
                <Grid item>
                    <List>
                    <ListItem>
                        <ListItemText>{bookitem.title}</ListItemText>
                    </ListItem>
                    </List>
                    <List>
                    <ListItem>
                        <ListItemText>{bookitem.author}</ListItemText>
                    </ListItem>
                    </List>
                </Grid>
            </Grid>
        </div>
    )
}

export default WishBookList
