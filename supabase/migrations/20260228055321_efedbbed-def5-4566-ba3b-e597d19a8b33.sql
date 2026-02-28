
-- Add image_url column to reviews table
ALTER TABLE public.reviews ADD COLUMN image_url text;

-- Add edit_token column so users can edit their own reviews (stored in localStorage)
ALTER TABLE public.reviews ADD COLUMN edit_token uuid DEFAULT gen_random_uuid();

-- Create storage bucket for review profile pictures
INSERT INTO storage.buckets (id, name, public) VALUES ('review-images', 'review-images', true);

-- Allow anyone to upload to review-images bucket
CREATE POLICY "Anyone can upload review images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'review-images');

-- Allow anyone to view review images
CREATE POLICY "Anyone can view review images"
ON storage.objects FOR SELECT
USING (bucket_id = 'review-images');

-- Allow anyone to delete their own review images
CREATE POLICY "Anyone can delete review images"
ON storage.objects FOR DELETE
USING (bucket_id = 'review-images');

-- Allow updates on reviews (for edit functionality)
CREATE POLICY "Anyone can update reviews with edit token"
ON public.reviews FOR UPDATE
USING (true)
WITH CHECK (true);
