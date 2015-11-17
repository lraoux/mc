  var DefaultRoute = ReactRouter.DefaultRoute;
  var HistoryLocation = ReactRouter.HistoryLocation;
  var Route = ReactRouter.Route;
  var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
  this.routes = (
    <Route handler={App} path='/' >
      <DefaultRoute handler={PacksList} path='packs' />
      <Route handler={PackNew} path='new' />
    </Route>
  );

  ReactRouter.run(this.routes, HistoryLocation, function(Handler) {
    $(function() {React.render(<Handler/>, document.getElementById('content'))});
  });
