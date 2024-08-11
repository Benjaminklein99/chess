const Files = ({files}) => {
  return (
    <div className='files'>{
      files.map(file => <span key={file}>{String.fromCharCode(file + 64)}</span>)
    }</div>
  )
}

export default Files;