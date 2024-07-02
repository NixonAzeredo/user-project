interface TitleProps {
  title: string;
  children?: React.ReactNode;
}

export function Title({ title, children }: TitleProps) {
  return (
    <div className="flex justify-between p-4">
      <h1 className="text-3xl font-bold">{title}</h1>
      {children}
    </div>
  );
}
