import AddUser from "./(components)/AddUser";
import DisplayUser from "./(components)/DisplayUser";
import { UserDetails } from "./(components)/UserDetails";

export default function Home() {
  return (
    <div>
      <h1>User Details</h1>
      <UserDetails />
      <AddUser />
      <DisplayUser />
    </div>
  );
}
