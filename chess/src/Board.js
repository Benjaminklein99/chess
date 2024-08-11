import './App.css';
import Ranks from './Ranks';
import Files from './Files';
import Pieces from './Pieces.js'

const Board = () => {

  const getColor = (i, j) => {
    if ((i + j) % 2 === 0) {
      return 'light'
    } else {
      return 'dark'
    }
  }

  const ranks = Array(8).fill().map((x, i) => 8 - i);
  const files = Array(8).fill().map((x, i) => String.fromCharCode(i + 97));

  return (
    <div className='board'>
      <Ranks ranks={ranks}/>
      <div className='tiles'>
        {
          ranks.map((rank, i) =>
            files.map((file, j) =>
              <div key={file + '-' + rank} className={getColor(i, j)}><Pieces/></div>
            )
          )
        }
      </div>
      <Files files={files}/>
    </div>
  )
}

export default Board