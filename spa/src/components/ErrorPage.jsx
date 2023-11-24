import MainNavigation from "./MainNavigation";

export default function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error Occurred!</h1>
        <h3>Could not find this page.</h3>
      </main>
    </>
  );
}
