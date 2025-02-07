import { supabase } from "./supabase";

// Auth functions
export const logoutUser = () => supabase.auth.signOut();

export const signInWithGoogle = async () => {
  try {
    const { data: { user }, error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    });
    if (error) throw error;
    return user;
  } catch (error) {
    console.error("Error signing in with Google", error);
    throw error;
  }
};

// Database functions
export const addDocument = async (tableName: string, data: any) => {
  const { data: result, error } = await supabase
    .from(tableName)
    .insert(data)
    .select()
    .single();
  if (error) throw error;
  return result;
};

export const getDocuments = async (tableName: string) => {
  const { data, error } = await supabase
    .from(tableName)
    .select('*');
  if (error) throw error;
  return data;
};

export const updateDocument = async (tableName: string, id: string, data: any) => {
  const { error } = await supabase
    .from(tableName)
    .update(data)
    .eq('id', id);
  if (error) throw error;
};

export const deleteDocument = async (tableName: string, id: string) => {
  const { error } = await supabase
    .from(tableName)
    .delete()
    .eq('id', id);
  if (error) throw error;
};

// Storage functions
export const uploadFile = async (file: File): Promise<string | null> => {
  const { data, error } = await supabase.storage
    .from('images') // Ensure you have a bucket named 'images'
    .upload(`public/${file.name}`, file);

  if (error) {
    console.error("Error uploading file:", error);
    return null;
  }

  // Get the public URL of the uploaded file
  const { publicURL, error: urlError } = supabase.storage
    .from('images')
    .getPublicUrl(data.path);

  if (urlError) {
    console.error("Error getting public URL:", urlError);
    return null;
  }

  return publicURL;
};
