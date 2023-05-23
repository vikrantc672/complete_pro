export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    discover_weekly: null,
    spotify: null,
    item: null,
    //set the value of token to null after complete devlopment
    // token:"BQA4qyyRk2hUbDVhHo-4ZxZBM2bpDlfwPIMZhrbppjsSlpxMFDSIJyoC7AqR8nGKZ88qqgJKMKOiEzcx-KObtsPsLU4P7xej8I4G5AyCOwtg0r8FDEFF8oHq1eOIZHcaH9JkDD9dj5ENShYX3JyKL7G8rpdmdDruM2MgkkDLmUvyYzxfaTgsN6IHEh3Pw_hGoB8HdIvoxhmHyeZDSrTilA"
};

const reducer=(state,action)=>{
    console.log(action);

    //Action->type,[payload]

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            }
            case 'SET_PLAYLISTS':
                return{
                    ...state,
                    playlists:action.playlists
                }
            case 'SET_DISCOVERWEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly
            }
            case "SET_PLAYING":
            return {
                 ...state,
                     playing: action.playing,
                    };
            case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
      case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

        default:
            return state;
    }
}

export default reducer;