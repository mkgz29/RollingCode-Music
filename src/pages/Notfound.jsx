import NotFoundContent from "../components/NotFoundContent";
import error404 from "../assets/404.png";

const NotFound = () => {
  return (
    <NotFoundContent
      title="404"
      message="Oops... the record scratched, this page doesn't exist"
      image={error404}
      redirectTo="/"
    />
  );
};

export default NotFound;
