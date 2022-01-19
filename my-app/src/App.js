import { Stack, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import BudgetCard from './components/BudgetCard';

function App() {
  return <Container className="my-4">
    <Stack direction="horizontal" gap="2" className="mb-4">
      <h1 className="me-auto">Budgets</h1>
      <Button varient="primary">Add Budget</Button>
      <Button varient="outline-primary">Add Expense</Button>
    </Stack>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
        gap: "1rem",
        alignItems: "flex-start",
      }}
    >
      <BudgetCard name="Entertainment" 
      gray 
      amount={1200}
       max= {1000}
       ></BudgetCard>
    </div>


  </Container>
}

export default App;
