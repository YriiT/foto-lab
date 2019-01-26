import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


const ParentCard = (props) => {
  const { header, onInputChange, fileNumber } = props
  const uploadFile = (event) => {
    onInputChange(event, fileNumber)
  }
  return (
    <Card className='parent_card'>
      <CardContent>
        <Typography className='parentCard' color="textSecondary" gutterBottom>
          {header}
        </Typography>
      </CardContent>
      <CardActions className={'upload_button'}>

        <input
          accept='image/*'
          className={'input_file'}
          id={`${fileNumber}__button`}
          type="file"
          onChange={uploadFile}
        />
        <label htmlFor={`${fileNumber}__button`}>
          <Button variant="outlined" component="span" >
            Upload
             <CloudUploadIcon className={'upload_button__icon'} />
          </Button>
        </label>
      </CardActions>
    </Card >
  )
}



const ParentCardContent = (props) => {
  const { onInputChange, onSubmit } = props
  return (
    <div className='parent_card_content'>
      <ParentCard
        header='Add parent 1'
        onInputChange={onInputChange}
        fileNumber='file_1'
      />
      <ParentCard
        header='Add parent 2'
        onInputChange={onInputChange}
        fileNumber='file_2'

      />
      <Button
        color='primary'
        variant='contained'
        component="span"
        onClick={onSubmit}
      >
        Go
      </Button>
    </div>
  )
}

export default ParentCardContent
