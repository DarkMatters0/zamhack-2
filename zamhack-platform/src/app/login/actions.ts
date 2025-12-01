'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  // 1. Await the client creation!
  const supabase = await createClient()

  // 2. Extract data
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  // 3. Attempt login
  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    // If login fails, redirect back with error (or return it if you're handling state)
    // Ideally, for a simple form, we return the error string.
    return { error: error.message }
  }

  // 4. Success -> Redirect
  revalidatePath('/', 'layout')
  redirect('/')
}
