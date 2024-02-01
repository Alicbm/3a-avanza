type Props = {
  title: string
  text: string
}

function TextFormat({ title, text }: Props) {
  return (
    <div>
      <h3 className="font-bold text-gray text-2xl border-b border-hoverGray pb-1 mb-2">{ title }</h3>
      <p className="text-gray text-lmd indent-6 text-justify leading-8">{ text }</p>
    </div>
  )
}

export default TextFormat