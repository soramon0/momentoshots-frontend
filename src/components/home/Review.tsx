import { VFC } from "react";

import type { Review as ReviewType } from "@/lib/sanity/schemaTypes";
import SanityImage from "@/components/shared/SanityImage";

type Props = {
  review: ReviewType;
};

const Review: VFC<Props> = ({ review }) => {
  return (
    <article className='my-4 mr-4 min-h-[13rem] p-4 rounded-lg shadow-md'>
      <header className='flex space-x-4'>
        <div className='w-16 h-16 p-0.5 rounded-md border border-gray-200'>
          <SanityImage
            className='rounded-md max-w-full'
            width='64'
            height='64'
            objectFit='cover'
            image={review.avatar}
          />
        </div>

        <div className='space-y-2'>
          <h3 className='text-xl font-medium font-display'>
            {review.fullname}
          </h3>
          <div className='space-x-2'>
            {review.keywords.map((keyword) => (
              <span
                className='px-4 py-1 text-sm capitalize rounded-md font-semibold text-gray-700 bg-gray-200'
                key={keyword}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </header>
      <q className='inline-block px-4 mt-4 text-gray-500'>{review.content}</q>
    </article>
  );
};

export default Review;
