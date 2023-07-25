import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '40px', // Set border radius to make it rounded
    backgroundColor: 'white',
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginLeft: theme.spacing(-125),
    marginTop: theme.spacing(1), // Add padding from the top
    width: '50%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add box shadow
    [theme.breakpoints.up('sm')]: { width: 'auto' },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: { width: '20ch' },
    // Add placeholder color
    '&::placeholder': {
      color: 'black',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between', // Change this to 'space-between'
    alignItems: 'center', // Align items to the center vertically
    backgroundColor: '#ffffff',
  },
  enterDate: {
    // marginLeft: theme.spacing(-55), // Change to marginLeft
    borderRadius: '40px', // Set border radius to make it rounded
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add box shadow
    '& input[type="date"]': {
      padding: '6px',
      borderRadius: '40px', // Set border radius to make it rounded
      border: '1px solid #ccc',
      width: '120px',
      fontSize: '16px',
      backgroundColor: 'transparent',
      outline: 'none',
    },
  },
  // Style for Type Selector
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
    display: 'flex', // Add display flex
    alignItems: 'center', // Vertically center the elements
    width: '120px',
    height: '40px', // Adjust the height as needed
    borderRadius: '20px', // Set border radius to make it rounded
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add box shadow
    backgroundColor: 'white',
    '& .MuiInputLabel-root': {
      color: 'red',
      marginRight: theme.spacing(1), // Add right margin for spacing
    },
    '& .MuiSelect-root': {
      color: 'black',
      padding: theme.spacing(1, 1, 1, 2),
    },
  },

  emptySpace: {
    flexGrow: 1, // This will make the space take up all available space between the elements
  },
  // Style for Rating Selector
  // formControl: {
  //   marginLeft: theme.spacing(2),
  //   minWidth: 120,
  //   borderRadius: '40px', // Set border radius to make it rounded
  //   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add box shadow
  //   backgroundColor: 'white',
  //   '& .MuiInputLabel-root': {
  //     color: 'black',
  //   },
  //   '& .MuiSelect-root': {
  //     color: 'black',
  //     padding: theme.spacing(1, 1, 1, 2),
  //   },
  // },
}));
