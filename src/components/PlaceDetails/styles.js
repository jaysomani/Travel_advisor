import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'row', // Set the direction to row
    height: '50%', // Set the card height to 50%
    marginBottom: 0, // Remove the default bottom margin
    '&:last-child': {
      marginBottom: 0, // Remove margin for the last card
    },
  },
  mediaContainer: {
    width: '40%', // Adjust the width as needed to make it square
    height: 'auto', // Automatically adjust the height to keep the image square
    overflow: 'hidden', // Hide any overflowing content from the image
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1f1f1', // You can set a background color if the image is not available or is loading
  },
  media: {
    width: '100%', // Adjust the width as needed
  },
  cardContent: {
    width: '60%', // Adjust the width as needed
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 2),
  },
  chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  spacing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    // Add styles for the title here to ensure it remains in one line
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  rating: {
    fontSize: '18px', // Adjust the font size for the stars
    '& .MuiRating-iconEmpty': {
      color: '#bbb', // Set the color for the empty stars
    },
  },
  numReviews: {
    fontSize: '14px', // Adjust the font size for the number of reviews
    color: '#777', // Set the color for the number of reviews
  },
}));
