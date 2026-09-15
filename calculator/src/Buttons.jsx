export default function Buttons({ className, value, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      {value}
    </div>
  );
}