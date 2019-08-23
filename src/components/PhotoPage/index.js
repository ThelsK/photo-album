import React from 'react'
import { connect } from "react-redux"
import PhotoPage from './PhotoPage'
import { getPhotosByAlbum } from '../../actions/photos'

class PhotoPageContainer extends React.Component {
  componentDidMount() {
    const albumId = this.props.match.params.id
    this.props.getPhotosByAlbum(albumId)
  }

  render() {
    if (!this.props.photos) return 'Loading...'
    return <PhotoPage photos={this.props.photos} />
  }
}

const mapStateToProps = state =>
  ({ photos: state.photos })

const mapDispatchToProps = { getPhotosByAlbum }

export default connect(mapStateToProps, mapDispatchToProps)(PhotoPageContainer)