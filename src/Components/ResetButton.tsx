import {useEffect, useState} from 'react';

type ResetProps = {
  value?: string;
}

export default function ResetButton({value = "Reset Game"}: ResetProps) {
  const [refresh, setRefresh] = useState<Boolean>(false);

  useEffect(() => {
    if (refresh) {
      window.location.reload();
    }
  }, [refresh]);

  return (
    <button
      type="button"
      className="text-primary ring-4  ring-primary hover:bg-neutral focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:ring-neutral dark:focus:ring-neutral hover:text-secondary"
      onClick={() => setRefresh(true)}
    >
      {value}
    </button>
  );
}
