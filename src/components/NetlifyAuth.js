import * as React from "react";
import netlifyIdentity from "netlify-identity-widget";

const user = netlifyIdentity.currentUser();

class NetlifyAuth extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogInClick = this.handleLogInClick.bind(this);
    this.handleLogOutClick = this.handleLogOutClick.bind(this);
    this.state = { loggedIn: false };
  }

  handleLogInClick() {
    netlifyIdentity.open();
  }

  handleLogOutClick() {
    netlifyIdentity.logout();
  }

  afterLogIn() {
    netlifyIdentity.close();
    this.setState({ loggedIn: true });
  }

  componentDidMount() {
    netlifyIdentity.on("login", () => this.afterLogIn());
    netlifyIdentity.on("logout", () => this.setState({ loggedIn: false }));
  }

  render() {
    if (!user) {
      return (
        <div>
          <ul>
            <li>
              <a href="#" onClick={this.handleLogInClick}>
                <button>Log in</button>
              </a>
            </li>
            <li>
              <a href="#" onClick={this.handleLogInClick}>
                <button>Sign up</button>
              </a>
            </li>
          </ul>
        </div>
      );
    }
    return (
      <a href="#" onClick={this.handleLogOutClick}>
        Log out of {user.email}
      </a>
    );
  }
}

export default NetlifyAuth;
