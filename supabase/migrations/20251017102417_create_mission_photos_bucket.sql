/*
  # Create Mission Photos Storage Bucket

  1. Storage Setup
    - Create a public bucket called `mission-photos`
    - Allow anyone to upload photos
    - Set size limit to 5MB per file
    - Allow only image file types (jpeg, jpg, png, webp)

  2. Security
    - Enable public access for reading photos (so they can be displayed in emails)
    - Allow anyone to upload photos (since the app is public)
    - Add policies for insert, select, and delete operations
*/

-- Create the storage bucket for mission photos
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'mission-photos',
  'mission-photos',
  true,
  5242880,
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- Allow anyone to upload photos
CREATE POLICY "Anyone can upload mission photos"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (bucket_id = 'mission-photos');

-- Allow anyone to read photos (public bucket)
CREATE POLICY "Anyone can view mission photos"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'mission-photos');

-- Allow anyone to delete photos
CREATE POLICY "Anyone can delete mission photos"
ON storage.objects
FOR DELETE
TO public
USING (bucket_id = 'mission-photos');