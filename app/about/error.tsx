"use client"

import { useEffect } from "react";

export default function Error({error, reset} : {error: Error; reset: () => void;}) {
  // useEffect(() => {
  //   console.log(error);
  // }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <h4>{error.message}</h4>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}