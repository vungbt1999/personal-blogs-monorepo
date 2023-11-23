type ButtonProps = {
  label: string;
};

export function Button({ label }: Readonly<ButtonProps>) {
  return <button>{label}</button>;
}
