import { ClipLoader } from 'react-spinners';

interface FLProps {
  status?: boolean;
}

function FullLoading({ status = true }: FLProps) {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <ClipLoader />
    </section>
  );
}

export default FullLoading;
