import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * collection
 *
 *
 */
export interface Collection extends SanityDocument {
  _type: "collection";

  /**
   * name — `string`
   *
   *
   */
  name: string;

  /**
   * slug — `slug`
   *
   *
   */
  slug: { _type: "slug"; current: string };

  /**
   * description — `text`
   *
   *
   */
  description?: string;

  /**
   * main_image — `collection_image`
   *
   *
   */
  main_image: CollectionImage;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyedReference<CollectionItem>>;
}

/**
 * collection_item
 *
 *
 */
export interface CollectionItem extends SanityDocument {
  _type: "collection_item";

  /**
   * name — `string`
   *
   *
   */
  name: string;

  /**
   * collection — `reference`
   *
   *
   */
  collection?: SanityReference<Collection>;

  /**
   * image — `collection_image`
   *
   *
   */
  image: CollectionImage;

  /**
   * featured — `boolean`
   *
   *
   */
  featured: boolean;
}

/**
 * contact
 *
 *
 */
export interface Contact extends SanityDocument {
  _type: "contact";

  /**
   * fullname — `string`
   *
   *
   */
  fullname: string;

  /**
   * email — `string`
   *
   *
   */
  email: string;

  /**
   * phone — `string`
   *
   *
   */
  phone: string;

  /**
   * message — `text`
   *
   *
   */
  message: string;
}

/**
 * review
 *
 *
 */
export interface Review extends SanityDocument {
  _type: "review";

  /**
   * fullname — `string`
   *
   *
   */
  fullname: string;

  /**
   * avatar — `collection_image`
   *
   *
   */
  avatar: CollectionImage;

  /**
   * keywords — `array`
   *
   *
   */
  keywords: Array<SanityKeyed<string>>;

  /**
   * content — `text`
   *
   *
   */
  content: string;
}

export type CollectionImage = {
  _type: "collection_image";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * caption — `string`
   *
   *
   */
  caption?: string;

  /**
   * alt — `string`
   *
   *
   */
  alt?: string;
};

export type Documents = Collection | CollectionItem | Contact | Review;
