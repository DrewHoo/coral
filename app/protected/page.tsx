import { auth, signOut } from 'app/auth';
// import { useFormStatus } from 'react-dom';
import { ViewDatasets } from './viewDatasets';


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