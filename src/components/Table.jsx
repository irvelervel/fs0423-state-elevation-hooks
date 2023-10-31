import { ListGroup } from 'react-bootstrap'

const Table = ({ selected, setStateOfApp }) => {
  // state = {
  //   selected: undefined, // può diventare "Uno", "Due" o "Tre"
  // }

  // Table riceve l'informazione di "selected" dalle Props, perchè l'informazione è salvata nello stato
  // del suo parent, App

  const checkSelected = (value) => (value === selected ? 'selected' : '')

  return (
    <>
      <ListGroup className="text-dark">
        <ListGroup.Item
          // onClick={(e) => this.setState({ selected: 'Uno' })}
          onClick={() => setStateOfApp('Uno')}
          className={checkSelected('Uno')}
        >
          Uno
        </ListGroup.Item>
        <ListGroup.Item
          // onClick={(e) => this.setState({ selected: 'Due' })}
          onClick={(e) => setStateOfApp('Due')}
          className={checkSelected('Due')}
        >
          Due
        </ListGroup.Item>
        <ListGroup.Item
          // onClick={(e) => this.setState({ selected: 'Tre' })}
          onClick={(e) => setStateOfApp('Tre')}
          className={checkSelected('Tre')}
        >
          Tre
        </ListGroup.Item>
      </ListGroup>
      <p className="mt-3">Stato del componente: {selected || 'undefined'}</p>
    </>
  )
}

export default Table
