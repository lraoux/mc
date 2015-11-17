PackShow = React.createClass({
  propTypes: {
    pack: React.PropTypes.object,
    selectedThumbnail: React.PropTypes.object
  },

  getInitialState: function() {
    if (this.state) {
      return (
        { selectedThumbnail: this.state.pack.images[0] }
      )
    } else {
      return (
        { pack: this.props.pack, selectedThumbnail: 0 }
      )
    }
  },

  renderThumbnails: function() {
    if (this.state.subpack) {
      var theImages = [];
      for (var i = 0; i < this.state.subpack.images.length; i++) {
        var image = this.state.subpack.images[i];
        theImages.push(
          <div className='thumbnail' data-id={image.id} style={{backgroundImage: 'url(' + image.url + ')'}} onClick={this.thumbnailClick}></div>
        );
      };

      return (
        <div className='thumbnails'>
          {theImages}
        </div>
      )

    } else if (this.props.pack) {
      var theImages = [];
      for (var i = 0; i  < this.props.pack.images.all_images.length; i++) {
        var image = this.props.pack.images.all_images[i];
        theImages.push(
          <div className='thumbnail' key={'image' + image.id} data-id={image.id} style={{backgroundImage: 'url(' + image.url + ')'}} onClick={this.thumbnailClick}></div>
        );
      };

      return (
        <div className='thumbnails'>
          {theImages}
        </div>
      )
    }
  },


  thumbnailClick: function(id) {
    var images = this.props.pack.images.all_images;

    for(var i = 0; i < images.length; i++) {
      if (images[i].id == parseInt(id.target.getAttribute('data-id')) ) {
        theSelectedThumbnail = images[i];
      }
    }

    this.setState({ selectedThumbnail: theSelectedThumbnail })
  },

  renderSubPacks: function() {
    if (this.props.pack.subpacks.subpacks) {
      var subp = this.props.pack.subpacks.subpacks;
      var theSubpacks = [];
      for (var i = 0; i < subp.length; i++) {
        theSubpacks.push(
          <li data-id={subp[i].id} onClick={this.subpackClick}>{subp[i].title}</li>
        );
      };

      return (
        <ul className='subpacks'>
          {theSubpacks}
        </ul>
      );
    }
  },

  renderTags: function (packTags, subpackTags) {
    if (subpackTags) {
      var collection = subpackTags;
    } else if (packTags) {
      var collection = packTags.all_tags;
    }
    var tags = [];
    for (var i = 0; i < collection.length; i++) {
      var tag = collection[i].title;
      tags.push(<li data-id={collection[i].id} onClick={this.tagClick} >#{tag}</li>);
    };

    return (
      <ul>
        {tags}
      </ul>
    )
  },

  subpackClick: function (id) {
    var subpacks = this.props.pack.subpacks.subpacks;
    for (var i = 0; i < subpacks.length; i++) {
      if (subpacks[i].id == parseInt(id.target.getAttribute('data-id')) ) {
        theSelectedThumbnail = subpacks[i].images[0];
        theSubpack = subpacks[i];
      }
    }

    this.setState({
      selectedThumbnail: theSelectedThumbnail,
      subpack: theSubpack
    });
  },

  componentWillUpdate: function(nextProps, nextState) {
    if (nextProps.pack != this.props.pack) {
      this.state.selectedThumbnail = 0;
      this.state.subpack = 0;
    }

  },

  tagClick: function() {
    this.props.tagClick(event.target.textContent);
  },

  render: function() {
    if (!this.props.pack) {
      return (
        <div className='pack-show' />
      )
    }

    if (this.state.subpack) {
      return (
        <div className='pack-show'>

          <div className='big-image' style={{backgroundImage: 'url(' + this.state.selectedThumbnail.url + ')'}} />
          <div className='right'>
            <div className='title'>
              {this.state.subpack.title}
            </div>
            <div className='buttons'>
              <div className='url'>
                <a href={this.state.subpack.url}>Download</a>
              </div>
              {this.renderSubPacks()}
            </div>
            <div className='description'>
              {this.state.subpack.description}
            </div>
            <div className='tags'>
              {this.renderTags(0, this.state.subpack.tags)}
            </div>

            <ReactCSSTransitionGroup transitionName='thumbnails-trans'>
              {this.renderThumbnails()}
            </ReactCSSTransitionGroup>

          </div>

        </div>
      )
    } else if (this.state.selectedThumbnail) {
      return (
        <div className='pack-show'>

          <div className='big-image' style={{backgroundImage: 'url(' + this.state.selectedThumbnail.url + ')'}} />
          <div className='right'>
            <div className='title'>
              {this.props.pack.title}
            </div>
            <div className='buttons'>
              <div className='url'>
                <a href={this.props.pack.url}>Download</a>
              </div>
              {this.renderSubPacks()}
            </div>
             <div className='description'>
              {this.props.pack.description}
            </div>
            <div className='tags'>
              {this.renderTags(this.props.pack.all_tags, 0)}
            </div>

            <ReactCSSTransitionGroup transitionName='thumbnails-trans'>
              {this.renderThumbnails()}
            </ReactCSSTransitionGroup>

          </div>

        </div>
      )
    } else if (this.props.pack) {
      return (
        <div className='pack-show'>

          <div className='big-image' style={{backgroundImage: 'url(' + this.props.pack.images.all_images[0].url + ')'}} />
          <div className='right'>
            <div className='title'>
              {this.props.pack.title}
            </div>
            <div className='buttons'>
              <div className='url'>
                <a href={this.props.pack.url}>Download</a>
              </div>
              {this.renderSubPacks()}
            </div>
            <div className='description'>
              {this.props.pack.description}
            </div>
            <div className='tags'>
              {this.renderTags(this.props.pack.all_tags, 0)}
            </div>

            <ReactCSSTransitionGroup transitionName='thumbnails-trans'>
              {this.renderThumbnails()}
            </ReactCSSTransitionGroup>

          </div>

        </div>
      )
    }
  }
})
