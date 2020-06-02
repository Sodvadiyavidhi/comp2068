const viewPath = ('pages');

exports.home = (req, res) => {
  res.render(`${viewPath}/home`, {
    pageTitle: 'Welcome Home'
  });
};

exports.about = (req, res) => {
  res.render(`${viewPath}/about`, {
    pageTitle: 'About Me'
  });
};

exports.thing = (req, res) => {
  res.render(`${viewPath}/thing`, {
    pageTitle: 'Thing'
  });
};

exports.contact = (req, res) => {
  res.render(`${viewPath}/contact`, {
    pageTitle: 'Contact'
  });
};