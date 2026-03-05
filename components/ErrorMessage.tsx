interface Props {
  message: string;
}

export default function ErrorMessage({ message }: Props) {
  return (
    <div className="flex justify-center items-center h-64">
      <p className="text-red-400 text-lg">⚠️ {message}</p>
    </div>
  );
}