import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

type ImageCollection = {
  [key: string]: ImagePlaceholder[];
};

export const PlaceHolderImages: ImageCollection = data.placeholderImages;

    