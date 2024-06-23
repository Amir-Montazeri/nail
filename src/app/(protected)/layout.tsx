interface PLProps {
  children: React.ReactNode;
}

function PortectedLayout({ children }: PLProps) {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center">
      {children}
    </div>
  );
}

export default PortectedLayout;
