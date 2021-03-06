import React, { Fragment } from "react";
import { useAuth0 } from "../../auth/Auth0";
import { CustomLoader } from "../../component/CustomLoader";
const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <CustomLoader />;
  }

  return (
    <Fragment>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </Fragment>
  );
};

export default Profile;
