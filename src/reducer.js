import { GET_USER, UPDATE_USER, DELETE_USER, CREATE_USER } from './actions';

const initialState = {
  username:'jon',
  email:'j@gmail.com',
  firstname:'jin',
  lastname:'rumi',
  rating:10,
  date:'10/10/2010'
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return { user: ...state };
    case UPDATE_USER:
      return { ...state, user: action.user  };
      case DELETE_USER:
        return { ...state, user: '' };
        case CREATE_USER:
          return { ...state, user: action.user };
    default:
      return state;
  }
}

//only one user at a time.
//user will be pulled from db
//user info can be updated in db
//user can be removed from db
//user can be inserted into db

//make the request, after the request has finished, if there's an error r
const myThunk = () => {
  return new Promise((resolve, reject) => {
    axios.get('')
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

state = {
  user:{
    id:1
    name:'',
    email:'',
    phone:'',
    history:[{ rating: 5, date: '10/10/2010'}, { rating: 8, date: '12/15/2010'}]
  }
}
