window.User = React.createClass({
  propTypes: {
    username: React.PropTypes.string,
    email: React.PropTypes.string,
    avatar: React.PropTypes.string,
    images: React.PropTypes.array,
    packs: React.PropTypes.array,
    subpacks: React.PropTypes.array
  },

  render: function() {
    return (
      <div>
        <div>Username: {this.props.username}</div>
        <div>Email: {this.props.email}</div>
        <div>Avatar: {this.props.avatar}</div>
        <div>Images: {this.props.images}</div>
        <div>Packs: {this.props.packs}</div>
        <div>Subpacks: {this.props.subpacks}</div>
      </div>
    );
  }
});
