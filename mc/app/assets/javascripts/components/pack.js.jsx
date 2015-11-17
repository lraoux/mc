window.Pack = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    url: React.PropTypes.string,
    subpacks: React.PropTypes.array,
    images: React.PropTypes.array
  },

  render: function() {
    return (
      <div>
        <div>Title: {this.props.title}</div>
        <div>Description: {this.props.description}</div>
        <div>Url: {this.props.url}</div>
        <div>Author: {this.props.author}</div>
        <div>Subpacks: {this.props.subpacks}</div>
        <div>Images: {this.props.images}</div>
      </div>
    );
  }
});
