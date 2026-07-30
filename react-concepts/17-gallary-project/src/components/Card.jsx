

function Card(props) {
  return (
   
      <div>
        <a href={props.elem.url} target='_blank' rel='noreferrer'>
          <div className='overflow-hidden rounded-xl bg-slate-900 shadow-lg'>
            <img
              className='w-full aspect-[16/10] object-cover'
              src={props.elem.download_url}
              alt={props.elem.author}
            />
            <div className='px-3 py-2 text-sm text-white/90'>
              {props.elem.author}
            </div>
          </div>
        </a>
      </div>
  )
}

export default Card