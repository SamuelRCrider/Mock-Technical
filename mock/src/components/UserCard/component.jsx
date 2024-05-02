import s from "./styles.module.css";

const UserCard = ({ name, email, avatarUrl }) => {
  return (
    <div className={s.container}>
      <img src={avatarUrl} className={s.userProfile} />
      <div className={s.secondContainer}>
        <h1 className="text-2xl font-bold mt-2 mb-4">{name}</h1>
        {/* TODO: Make button link to create story page */}

        <p className="btn btn-neutral">{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
