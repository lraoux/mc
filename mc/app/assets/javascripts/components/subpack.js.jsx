window.Subpack = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    url: React.PropTypes.string,
    author: React.PropTypes.instanceOf(window.User),
    pack: React.PropTypes.instanceOf(Pack),
    images: React.PropTypes.arrayOf(React.PropTypes.Image)
  },

  render: function() {
    return (
      <div>
        <div>Title: {this.props.title}</div>
        <div>Description: {this.props.description}</div>
        <div>Url: {this.props.url}</div>
        <div>Author: {this.props.author}</div>
        <div>Pack: {this.props.pack}</div>
        <div>Images: {this.props.images}</div>
      </div>
    );
  }
});
