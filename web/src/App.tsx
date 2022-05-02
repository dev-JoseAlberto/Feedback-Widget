interface ButtonProps {
  text?:string;

}

function Button(props:ButtonProps){
  return <button>{ props.text ?? 'Default'}</button>

}

function App() {
  return (
    <div>
      <Button text="To Send" />
      <Button text="Okay" />
      <Button />
    </div>

  )
}

export default App
