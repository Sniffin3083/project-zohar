import React from 'react';

const {useState} = React;
const {useEffect} = React;

const Data = [
  {
    id: 1,
    name: 'test',
    LastName: 'testLast'
  },
  {
    id: 2,
    name: 'test2',
    LastName: 'testLast2'
  }
]

export default function XCOne() {

  const formatData = (items) => {
    return items.map((item) => ({...item, isActive: false}))
  }

  const [myRecords, setMyRecords] = useState(formatData(Data))

  const handleColorChange = (id) => {
    setMyRecords((prevState) => {
      return prevState.map((item) => {
        if(item.id === id) {
          return {...item, isActive: !item.isActive}
        }else {
          return item;
        }
      })
    })
  }

  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(myRecords));
  }, [myRecords]);

  return (
    <>
      <table className="border-solid border-2 border-black">
        {myRecords.map((current) => (
        <tr 
          key={current.id}
          onClick={() => handleColorChange(current.id)} 
          style={{
            backgroundColor: current.isActive ? 'crimson' : '',
          }}
          className=""
        >
          <th className="border-solid border-2 border-black">{current.name}</th>
          <th className="border-solid border-2 border-black">{current.LastName}</th>
          <th className="border-solid border-2 border-black">test</th>
        </tr>
        ))}
        <p>hi</p>
      </table>
    </>
  );
}