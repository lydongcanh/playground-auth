import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function App() {
  const [accessToken, setAccessToken] = useState<string>("");
  const { loginWithRedirect, getAccessTokenSilently, logout, user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      <button onClick={() => loginWithRedirect({
        authorizationParams: {
          dataRoomId: 65693,
          dataRoomUserId: 1985474
        }
      })}>Log In</button>&nbsp;

      <button disabled={!isAuthenticated} onClick={() => logout({ logoutParams: { returnTo: "https://id.dev1.ansarada.com/logout-callback" } })}>
        Log Out
      </button>&nbsp;

      <button disabled={!isAuthenticated} onClick={async () => setAccessToken(await getAccessTokenSilently())}>
        Get Access Token
      </button>
      {isAuthenticated && (
        <div>
          <hr></hr>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>

          {accessToken && (
            <p>{accessToken}</p>
          )}
        </div>
      )}
    </div>
  );
}
