export default function Button(props) {
  const { onClick, num } = props;

  return <button onClick={() => onClick(num)}>{num}</button>;
}
