import React from 'react'
import { connect } from "react-redux"
import AlbumsList from './AlbumsList'
import { getAlbums, createAlbum } from '../../actions/albums'
import AddAlbumForm from './AddAlbumForm';


class AlbumsListContainer extends React.Component {
  state = {}

  componentDidMount() {
    this.props.getAlbums()
  }

  render() {
    if (!this.props.albums) return 'Loading...'
    return (
      <div>
        <AlbumsList albums={this.props.albums} />
        <AddAlbumForm createAlbum={this.props.createAlbum} />
      </div>
    )
  }
}

const mapStateToProps = state =>
  ({ albums: state.albums })

const mapDispatchToProps = { getAlbums, createAlbum }

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsListContainer)