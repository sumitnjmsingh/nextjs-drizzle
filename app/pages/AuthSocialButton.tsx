import { IconType } from 'react-icons';
import { FcGoogle } from "react-icons/fc";

interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      title="Sign in"
      type="button"
      onClick={onClick}
      className="inline-flex w-full justify-center rounded-md bg-[#e0dede] px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
    >
      <FcGoogle className='text-[23px]' />
    </button>
  );
};
export default AuthSocialButton;