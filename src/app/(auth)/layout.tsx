interface ALProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: ALProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
}

export default AuthLayout;
