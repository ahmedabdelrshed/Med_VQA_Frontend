import { useState } from "react";
import ProfileImage from "../components/profile/ProfileImage";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { TUserUpdated } from "../Types";
import actUpdateUser from "../store/user/act/actUpdateUser";
import ProfileData from "../components/profile/ProfileData";

const Profile = () => {
  const dispatch = useAppDispatch();
  const { user, error, loading } = useAppSelector((state) => state.auth);
  const [userUpdated, setUserUpdated] = useState<TUserUpdated>(user);
  const onUserUpdated = async (userUpdated:TUserUpdated) => {
    await dispatch(actUpdateUser(userUpdated))
      .unwrap()
      .then(() => {
        setUserUpdated(user);
      });
  };
  return (
    <div className="bg-gray-100 p-5 min-h-screen ">
      <ProfileImage
        avatar={user.avatar}
        setUserUpdated={setUserUpdated}
        fullName={`${user.firstName} ${user.lastName}`}
        error={error}
        loading={loading}
        onUserUpdated={onUserUpdated}
        userUpdated={userUpdated}
      />
      <ProfileData
        error={error}
        loading={loading}
        onUserUpdated={onUserUpdated}
        setUserUpdated={setUserUpdated}
        firstName={user.firstName}
        lastName={user.lastName}
      />
    </div>
  );
};

export default Profile;
