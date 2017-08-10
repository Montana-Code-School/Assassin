export default function reducer(state, action){
  switch(action.type){
    case 'login':
    console.log("login reducer firing");
      return {
        ...state,
        username: action.username,
        token: action.token
      }
    case 'logout':
    console.log("logout reducer firing");
      return {
        ...state,
        username: undefined,
        token: undefined
      }
    case 'locate':
    console.log("locate reducer firing", action);
      return {
        ...state,
        longitude: action.longitude,
        latitude: action.latitude,
        locationError: action.error
      }
      case 'joinroom':
      console.log("joinroom reducer firing", action);
        return {
          ...state,
          roomCode: action.roomCode
        }
      case 'createroom':
      console.log("createroom reducer firing", action);
        return {
          ...state,
          roomCode: action.roomCode,
          roomCreator: action.roomCreator
        }
      case 'newAssignedTarget':
        return{
          ...state,
          target: action.target
        }
      case 'newPlayersWaiting':
      console.log("newPlayersWaiting is firing", action)
        return {
          ...state,
          waitingPlayers: action.players,
          roomCreator: action.creator
        }
    default:
      return state
  }
}
export default function reducer(state, action){
  switch(action.type){
    case 'login':
    console.log("login reducer firing");
      return {
        ...state,
        username: action.username,
        token: action.token
      }
    case 'logout':
    console.log("logout reducer firing");
      return {
        ...state,
        username: undefined,
        token: undefined
      }
    case 'locate':
    console.log("locate reducer firing", action);
      return {
        ...state,
        longitude: action.longitude,
        latitude: action.latitude,
        locationError: action.error
      }
      case 'joinroom':
      console.log("joinroom reducer firing", action);
        return {
          ...state,
          roomCode: action.roomCode
        }
      case 'createroom':
      console.log("createroom reducer firing", action);
        return {
          ...state,
          roomCode: action.roomCode,
          roomCreator: action.roomCreator
        }
      case 'newAssignedTarget':
        return{
          ...state,
          target: action.target
        }
      case 'newPlayersWaiting':
      console.log("newPlayersWaiting is firing", action)
        return {
          ...state,
          waitingPlayers: action.players,
          roomCreator: action.creator
        }
      case 'kill':
      console.log("kill function is working", action)
        return {
          ...state,
          target: action.target,
          username: action.username
        }
        case 'die':
        console.log("a death has occurred", action)
          return {
            ...state,
            isAlive: action.isAlive,
            username: action.username
          }
          case 'newGhostRoom':
            console.log("newGhost room is haunting", action)
            return {
              ...state,
              players: action.deadPlayers
            }
    default:
      return state
  }
}
