import NotFoundContent from "../components/NotFoundContent";
import error404 from "../assets/404.png";

const NotFound = () => {
  return (
    <NotFoundContent
      title="404"
      message="Ups... se nos rayo el disco, esta página no existe"
      image={error404}
      redirectTo="/"
    />
  );
};

export default NotFound;
