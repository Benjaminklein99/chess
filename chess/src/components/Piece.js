const Piece = ({state, setState, rank, file, piece}) => {

  const onDragStart = (e) => {
    // let newState = [...state];
    // newState[rank][file] = ''

    // setState(newState)
    // console.log(state)
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', `${piece}, ${rank}, ${file}`)
    setTimeout(() => {
      e.target.style.display = 'none';
    })
  }

  return (
    <div
      className={`piece ${piece} p-${rank}${file}`}
      draggable={true}
      onDragStart={onDragStart}
    ></div>
  )
}

export default Piece;