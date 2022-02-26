import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { classNames, isRoute } from "@/lib";
import { useCollectionSlugs } from "@/hooks/useCollectionSlugs";

function LatestCollectionSlugs() {
  const { asPath } = useRouter();
  const color = (path: string) =>
    isRoute(path, asPath) ? "font-semibold text-primary" : "text-gray-700";

  const { collections, getCollectionSlugs, isLoading, isError } =
    useCollectionSlugs();

  useEffect(() => {
    getCollectionSlugs();
  }, [getCollectionSlugs]);

  if (isLoading) {
    return <li>Fetching collections...</li>;
  }

  if (isError) {
    return <li>Could not fetch collections</li>;
  }

  return (
    <>
      {collections.map((item) => (
        <li key={item._id}>
          <Link href={`/collections/${item.slug.current}`}>
            <a
              className={classNames(
                "hover:text-primary focus:text-primary",
                color(`/collections/${item.slug.current}`)
              )}
            >
              {item.name}
            </a>
          </Link>
        </li>
      ))}
    </>
  );
}

export default LatestCollectionSlugs;
