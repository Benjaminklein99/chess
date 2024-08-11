import Piece from './Piece'

const Pieces = ({piece}) => {
  const position =
  [['dr', 'dn', 'db', 'dq', 'dk', 'db', 'dn', 'dr'],
  ['dp', 'dp', 'dp', 'dp', 'dp', 'dp', 'dp', 'dp'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '']]

  return (
    <div className='pieces'>{
      position.map((r, rank) =>
        r.map((f, file) =>
          position[rank][file] ?
          <Piece
            key={rank + '--' + file}
            rank={rank}
            file={file}
            piece={position[rank][file]}
          />
          : null)
      )
    }
    </div>
  )
}

export default Pieces;