import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
// import ViewNotes from '../screens/ViewNotes'
// import AddNotes from '../screens/AddNotes'
import ViewClients from '../screens/ViewClients'
import AddClient from '../screens/AddClients'
import AddClientPic from '../screens/AddClientPic'

const StackNavigator = createStackNavigator(
  // {
  //   ViewNotes: {
  //     screen: ViewNotes
  //   },
  //   AddNotes: {
  //     screen: AddNotes
  //   }
  // },
  {
    ViewClients: {
      screen: ViewClients
    },
    AddClient: {
      screen: AddClient
    },
    AddClientPic: {
      screen: AddClientPic
    }
  },
  {
    initialRouteName: 'ViewClients',
    headerMode: 'none',
    mode: 'modal'
  }
)

export default createAppContainer(StackNavigator)
