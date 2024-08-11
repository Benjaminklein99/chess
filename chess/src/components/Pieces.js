import {useState} from 'react';
import Piece from './Piece'

const Pieces = () => {

  const position =
  [['dr', 'dn', 'db', 'dq', 'dk', 'db', 'dn', 'dr'],
  ['dp', 'dp', 'dp', 'dp', 'dp', 'dp', 'dp', 'dp'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', 'dp', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '']]

  const [state, setState] = useState(position)
  // console.log(state)
  const onDrop = (e) => {
    console.log(e.dataTransfer.getData('text'));
  }

  const onDragOver = e => e.preventDefault();

  return (
    <div
      className='pieces'
      onDrop={onDrop}
      onDragOver={onDragOver}
    >{
      state.map((r, rank) =>
        r.map((f, file) =>
          state[rank][file] ?
          <Piece
            key={rank + '-' + file}
            state={state}
            setState={setState}
            rank={rank}
            file={file}
            piece={state[rank][file]}
          /> :
          <div key={`blank p-${rank}${file}`}/>
        )
      )
    }
    </div>
  )
}

export default Pieces;