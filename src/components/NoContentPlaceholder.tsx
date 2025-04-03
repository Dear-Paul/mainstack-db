type NoContentPlaceHolderProps = {
  title: string;
  content: string;
};

export default function NoContentPlaceholder({
  title,
  content,
}: NoContentPlaceHolderProps) {
  return (
    <section className="m-auto flex flex-col gap-4 justify-center items-center">
      <h3>{title}</h3>
      <h6 className="text-gray-400">{content}</h6>
    </section>
  );
}
