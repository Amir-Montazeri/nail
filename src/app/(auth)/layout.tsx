interface ALProps {
  children: React.ReactNode;
}

function AuthLayout({ children }: ALProps) {
  return (
    <div className="min-h-screen flex items-center justify-center grainy-light dark:grainy-dark">
      {children}
    </div>
  );
}

export default AuthLayout;
