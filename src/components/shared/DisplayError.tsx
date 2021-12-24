import type { VFC } from "react";
import { motion } from "framer-motion";

interface Props {
  error?: string[];
}

const DisplayError: VFC<Props> = ({ error }) => {
  if (!error) return null;

  if (!error.length) return null;

  return (
    <div className="flex flex-col space-x-2">
      {error.map((err) => (
        <motion.span
          key={err}
          className="text-red-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {err}
        </motion.span>
      ))}
    </div>
  );
};

export default DisplayError;
