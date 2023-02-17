import { Link } from "react-router-dom";

function ProfileUser(props) {
  const { user, myRecipes, myCartsSubscription } = props;
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
        {myCartsSubscription.map((c) => (
          <div className="my-carts-subscription-item">
            <img src={c.img_url} alt={c.nom} />
            <h2>{c.nom}</h2>
            <h3>Panier par {c.Nom}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileUser;
