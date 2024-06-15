import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import CardWrapper from '../card-wrapper';

function ErrorCard() {
  return (
    <CardWrapper
      headerTitle="❌ Error!"
      headerLabel="Oops! Something went wrong!"
      backButtonLabel="Back to login"
      backButtonHref="/login"
    >
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
}

export default ErrorCard;
