export const BlockWrapper = ({
  component,
  name,
  type,
}: {
  component: React.ReactNode;
  name: string;
  type: string;
}) => {
  return (
    <div className="grid grid-cols-[1fr_4fr]">
      <div className="p-3 border-r bg-accent/30">
        <h3>{name}</h3>
        <p className="text-muted-foreground">{type}</p>
      </div>
      <div>{component}</div>
    </div>
  );
};
