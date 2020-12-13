const CREATING = "FOLLOWED";

let initialState = {
  items: [],
  textMenu: "Enter name for a new menu item",
  profile: null,
  taskName: null,
};

const tasksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // case REFRESH_TEXT: {
    // 	let stateCopy = {...state};
    // 	stateCopy.textMenu = action.textMenu;
    // 	return stateCopy;
    // }
    // case SET_USER_PROFILE: {
    // 	return {
    // 		...state,
    // 		profile: action.profile
    // 	}
    // }
    case CREATING: {
      return {
        ...state,
        taskName: action.taskName,
      };
    }
    default:
      return state;
  }
};

// export let refreshText = (text) => ({
//   type: REFRESH_TEXT,
//   textMenu: text
// });

// export let setUserProfile = (profile) => ({
//   type: SET_USER_PROFILE,
// 	profile
// });

export let createTask = (taskName: string, ) => ({
  type: CREATING,
  taskName: taskName,
});

// export const setProfile = (id) => {
// 	return (dispatch) => {
// 		usersAPI.getProfileAPI(id)
// 		  .then(response => {
// 					dispatch(setUserProfile(response));
// 		  });
// 		usersAPI.getFollowAPI(id)
// 			.then(response => {
// 				 	dispatch(setFollowing(response));
// 			});
// 	}
// }

export default tasksReducer;
