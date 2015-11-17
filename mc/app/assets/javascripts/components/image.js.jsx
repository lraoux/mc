window.Image = React.createClass({
  propTypes: {
    url: React.PropTypes.string,
    description: React.PropTypes.string,
    createdAt: React.PropTypes.string,
    updatedAt: React.PropTypes.string,
    author: React.PropTypes.instanceOf(window.User),
    subpack: React.PropTypes.instanceOf(window.Subpack),
    pack: React.PropTypes.instanceOf(window.Pack)
  },

  clickHandler: function(){

        // When the component is clicked, trigger the onClick handler that
        // was passed as an attribute when it was constructed:

        this.props.onClick(this.props.ref);
    },

  render: function() {
    return (
      <div className={image}>
        <div>Url: {this.props.url}</div>
        <div>Description: {this.props.description}</div>
        <div>Created At: {this.props.createdAt}</div>
        <div>Updated At: {this.props.updatedAt}</div>
        <div>Author: {this.props.author}</div>
        <div>Subpack: {this.props.subpack}</div>
        <div>Pack: {this.props.pack}</div>
      </div>
    );
  }
});
