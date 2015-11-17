var PackNew = React.createClass({
  componentDidMount: function () {
    $('.form-container').hover(function () {
      $('.black-overlay.new').toggleClass('is-active');
    });
    $('.form-container').draggable();
  },

  render: function () {
    var csrf_token = $("meta")[1].content;

    return (

      <div className='packnew'>
        <div class="errors newpack-errors">
        </div>
        <div className='packnew-background' style={{backgroundImage: window.bg}} />
        <div className='black-overlay new' />
        <div className='form-container-outer'>
          <div className='form-container'>
            <div className='form-title new'>
              <h4>Minecraft</h4>
              <h3>Customizer</h3>
            </div>


            <div className='form-title-new-pack'>
              New Pack
            </div>
            <form classname='newpack-form' action='api/packs' method='POST'>

              <input type="hidden" name="authenticity_token" value={csrf_token} />

              <input type="text" name="pack[title]" placeholder="Title" className="ffield pack title" tabindex="1" /><br />

              <textarea name="pack[description]" placeholder="Description" className="ffield pack description" tabindex="2" /><br />

              <input type="text" name="pack[url]" placeholder="Download URL" className="ffield pack url" tabindex="3" /><br />

              <input type="text" name="pack[prev]" placeholder="Preview Image URL" className="ffield pack prev" tabindex="4" /><br />

              <input type="submit" value="Create Pack" className="submit pack" tabindex="5" /><br />
            </form>
          </div>
        </div>
      </div>

    )
  }
})
