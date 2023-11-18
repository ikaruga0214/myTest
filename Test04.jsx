function ConditionalRendering({ isLoggedIn }) {
  return <div>{isLoggedIn ? "Success" : "Failure"}</div>;
}
