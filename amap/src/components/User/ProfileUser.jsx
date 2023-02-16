import { Link } from "react-router-dom";

function ProfileUser(props) {
  const { user, myRecipes } = props;
  return (
    <div className="container">
      <div className="profile">
        <div className="profile-avatar">
          <img src={user.avatar} alt="" />
        </div>
        <div className="profile-info">
          <h2>{user.nom?.split(" ")[1]}</h2>
          <h3>
            Membre depuis le{" "}
            {new Date(user.created_at).toLocaleDateString("fr-FR")}
          </h3>
        </div>
      </div>
      <div className="my-recipes">
        <h1>Mes recettes</h1>
        <div className="my-recipes-items">
          {myRecipes.map((r) => (
            <Link to={`/recipes/${r.id}`}>
              <div className="my-recipes-item" key={r.id}>
                <img src={r.photo} alt={r.titre} />
                <h2>{r.titre}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="my-carts-subscription">
        <h1>Mes paniers</h1>
      </div>
    </div>
  );
}

export default ProfileUser;
