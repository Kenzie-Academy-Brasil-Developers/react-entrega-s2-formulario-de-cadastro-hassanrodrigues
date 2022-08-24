import { Header as Head } from "./styles";

function Header({ user }) {
  return (
    <Head>
      <div>
        <h3>Olá, {user.name}!</h3>
        <p>{user.course_module}</p>
      </div>
    </Head>
  );
}

export default Header;
