import React from 'react';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export const FirstCard = props => {
  return (
    <Card className='app_card'>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Create a child with FotoLab
          </Typography>
      </CardContent>
      <CardActions className='card_actions'>
        <Button
          className='app_begin__button'
          color="primary"
          variant="outlined"
          onClick={props.onBeginButtonClick} >
          Begin
          </Button>
      </CardActions>
    </Card>
  )
}
