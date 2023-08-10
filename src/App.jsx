import Input from './components/input'

function App() {
  
  return (
    <Input.Root>
      <Input.Label content={'label'}/>
      
      <Input.Wrapper>
        <Input.Content>
          <Input.Main />
        </Input.Content>

        <Input.Button.Root>
          <Input.Button.Content text= 'add'/>
        </Input.Button.Root>
      </Input.Wrapper>
    </Input.Root>
  )
}

export default App
