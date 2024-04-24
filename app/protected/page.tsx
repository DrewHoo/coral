import { auth, signOut } from 'app/auth';
import { useFormStatus } from 'react-dom';

export default async function ProtectedPage() {
  let session = await auth();

  return (
    <div className="flex h-screen bg-black">
      <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center text-white">
        You are logged in as {session?.user?.email}
        <SignOut />
        <ViewDatasets />
      </div>
    </div>
  );
}

function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit">Sign out</button>
    </form>
  );
}

  function clickMe() {
    alert("You clicked me!");
  }

  function ViewDatasets() {
    return (
      <form
        action={async () => {
          'use server';
          await clickMe();  // leaving this in because I think we'll need it when ViewDatasets actually shows datasets 
        }}
      >
        <button onClick={clickMe}>Default Button</button>
      </form>
    );

}
