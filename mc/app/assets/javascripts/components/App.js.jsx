var RouteHandler = ReactRouter.RouteHandler;
var App = React.createClass({

  render: function () {
    $('.menu-icon').click(function() {
      $(this).toggleClass('is-active');
      $(".nav-menu").animate({width:'toggle'},350);
    });
    $('.nav-link').hover(function () {
      $(event.target.children[0]).toggleClass('is-active');
    });

    return (
      <div>

        <RouteHandler />
      </div>
    )
  }
})
