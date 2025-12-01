import { useEffect, useRef, useState } from "react";

type UseInfiniteScrollProps = {
  nextCursor: string | undefined | null;
  fetchNextPage: () => void;
  rootMargin?: string;
};

export const useInfiniteScroll = ({
  nextCursor,
  fetchNextPage,
  rootMargin = "200px",
}: UseInfiniteScrollProps) => {
  const [isFetchingNext, setIsFetchingNext] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sentinelRef.current) return;
    if (!nextCursor) return;
    if (isFetchingNext) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetchingNext) {
          setIsFetchingNext(true);
          fetchNextPage();
        }
      },
      { rootMargin }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [nextCursor, fetchNextPage, isFetchingNext, rootMargin]);

  useEffect(() => {
    if (isFetchingNext) setIsFetchingNext(false);
  }, [nextCursor]);

  return { sentinelRef, isFetchingNext };
};
