type Props = {
  searched: string
}

function NotResults({ searched }: Props) { 
  return (
    <div className="w-full h-[200px] grid place-content-center col-span-4 mx-auto">
      <p className="text-center text-gray text-5xl font-bold">No hay resultados para <span className="text-blue">{ searched }</span></p>
      <img 
        src='' 
        alt={`N hay resultados para ${searched}`} 
        className='opacity-10'
      />
    </div>
  )
}

export default NotResults