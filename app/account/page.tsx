// accounts.tsx
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Import any components for UI structure and styling

export default async function AccountsPage() {
  const supabase = createServerComponentClient({ cookies });

  // Check if there's a valid session based on cookies
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    // User is not authenticated, redirect to login page
    return redirect("/login");
  }

  // Extract user email from the session
  const userEmail = session.user.email;

  // Render the page with the user's email address
  return (
    // Your UI structure
    <div>
      <h1>Hi, {userEmail}</h1>
      {/* Display other relevant user information if needed */}
    </div>
  );
}
