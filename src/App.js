import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { useDispatch, useSelector } from "react-redux";
import { getAllEntries } from "./actions/entries.actions";

function App() {
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expanseTotal, setExpanseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const { isOpen, id } = useSelector((state) => state.modals);
  const entries = useSelector((state) => state.entries);
  const dispatch = useDispatch();

  useEffect(() => {
    const index = entries.findIndex((entry) => entry.id === id);
    setEntry(entries[index]);
  }, [isOpen, id, entries]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    for (const entry of entries) {
      if (entry.isExpense) {
        totalExpenses += Number(entry.value);
      } else {
        totalIncomes += Number(entry.value);
      }
    }
    setTotal(totalIncomes - totalExpenses);
    setIncomeTotal(totalIncomes);
    setExpanseTotal(totalExpenses);
  }, [entries]);

  useEffect(() => {
    dispatch(getAllEntries());
  }, [dispatch]);

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance size="small" label="Your balance:" value={total} />
      <DisplayBalances incomeTotal={incomeTotal} expanseTotal={expanseTotal} />

      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />

      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  );
}

export default App;
