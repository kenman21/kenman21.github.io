import React from 'react'
import MapCreator from './MapCreator'
import {connect} from 'react-redux'
import {setSession} from '../actions/actions.js'
import {checkForSession, getChatroom} from '../actions/fetch_actions.js'
import ChatContainer from './ChatContainer'

class Session extends React.Component {

  componentDidMount = () => {
    if (localStorage.openSession) {
      this.props.setSession(JSON.parse(localStorage.openSession))
    }
    if (this.props.currentUser.id !== this.props.openCampaign.creator_id) {
      this.props.checkForSession(this.props.openCampaign.id)
    }
    this.props.getChatroom(this.props.openCampaign.id)
  }


  render() {
    return (
      <div>
        <MapCreator session={true}/>
        <ChatContainer/>
      </div>
    )
  }
}

function mapStatetoProps(state) {
  return {
    openCampaign: state.openCampaign,
    currentUser: state.currentUser,
    openSession: state.openSession
  }
}

export default connect(mapStatetoProps, {setSession, getChatroom, checkForSession})(Session)
