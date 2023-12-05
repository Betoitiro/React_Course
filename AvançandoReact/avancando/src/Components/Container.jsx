

const Container = ({children, myvalue}) => {
  return (
    <div>
        <h1>Este é o titulo do container</h1>
        {children}
        {myvalue}
        
    </div>
  )
}

export default Container