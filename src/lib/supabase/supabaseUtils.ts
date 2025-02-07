
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
export const uploadFile = async (file: File, path: string) => {
  const { data, error } = await supabase
    .storage
    .from('your-bucket-name')
    .upload(path, file);
  if (error) throw error;
  
  const { data: { publicUrl } } = supabase
    .storage
    .from('your-bucket-name')
    .getPublicUrl(path);
    
  return publicUrl;
};
