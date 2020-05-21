import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "../auth/Auth0";
import { Menu, Dropdown, Image } from "semantic-ui-react";

export const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const renderProfileIcon = () => {
    return (
      <>
        {user && (
          <span>
            <Image avatar src={user.picture} /> {user.name}
          </span>
        )}
      </>
    );
  };
  return (
    <Menu stackable>
      <Menu.Item header>
        <Link to="/">Reference App</Link>
      </Menu.Item>
      <Menu.Menu position="left">
        <Menu.Item>
          <Link to="/todos">Todos</Link>
        </Menu.Item>
      </Menu.Menu>
      <Menu.Menu position="right">
        {!isAuthenticated && (
          <Menu.Item button onClick={() => loginWithRedirect()}>
            Log in
          </Menu.Item>
        )}
        {isAuthenticated && (
          <Dropdown item trigger={renderProfileIcon()}>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/profile">Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item button onClick={() => logout()}>
                Log out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </Menu.Menu>
    </Menu>
  );
};
