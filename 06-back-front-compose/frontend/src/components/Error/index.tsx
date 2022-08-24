export default function Error(props: { err: string }) {
  return <div className="Error">
    <p>{props.err}</p>
  </div>;
}
