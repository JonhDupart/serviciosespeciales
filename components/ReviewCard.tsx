import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useIntersectionObserver } from "@/utils/useIntersectionObserver"; // Ajusta la ruta según tu estructura

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  const controls = useAnimation();
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [isVisible, controls]);

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.7 }}
      className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 ml-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </motion.figure>
  );
};

export default ReviewCard;
