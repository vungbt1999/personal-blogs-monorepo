type SelectProps = {
  options: string[];
};

export function Select({ options }: Readonly<SelectProps>) {
  return (
    <select name="cars" id="cars">
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
