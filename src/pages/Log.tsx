import { useEffect, useState } from "react";
import styles from "./Log.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface Expense {
  id: string;
  date: string;
  payee: string;
  category: string;
  amount: number;
}

interface Category {
  id: string;
  icon: string;
  monthlyAmount: Number;
  title: string;
}

const Log = () => {
  const [expenses, setExpenses] = useState<Array<Expense>>([]);
  const [categories, setCategories] = useState<Array<Category>>([]);

  const getCategory = (categoryKey: string): Category | undefined => {
    let category = categories.find((category) => categoryKey === category.id);
    return category;
  };

  const getExpenses = () => {
    fetch(
      "https://pocket-minder-d506a-default-rtdb.firebaseio.com/expenses.json",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const loadedExpenses = [];
        for (const key in data) {
          loadedExpenses.push({
            id: key,
            date: data[key].date,
            payee: data[key].payee,
            category: getCategory(data[key].categoryKey)?.title || "Unknown",
            amount: data[key].amount,
          });
        }

        setExpenses(loadedExpenses);
      });
  };

  const getCategories = () => {
    fetch(
      "https://pocket-minder-d506a-default-rtdb.firebaseio.com/categories.json",
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const loadedCategories = [];
        for (const key in data) {
          loadedCategories.push({
            id: key,
            icon: data[key].icon,
            monthlyAmount: data[key].monthlyAmount,
            title: data[key].title,
          });
        }

        setCategories(loadedCategories);
      });
  };

  useEffect(() => {
    getCategories();
    getExpenses();
  }, [categories]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Expense Log</h1>
        <button className={styles["add-expense-btn"]}>Add Expense</button>
      </div>
      <div className={styles.log}>
        {/* <div className={styles.filters}>
          <div className={styles.filter}>
            <form autoComplete="off">
              <div className={styles["custom-select"]}>
                <select>
                  <option value="" id="default-select">
                    Filter By Category
                    <FontAwesomeIcon icon={faAngleDown} />
                  </option>
                  <option value="auto">Auto & Transport</option>
                  <option value="food">Food & Drinks</option>
                  <option value="fun">Fun & Recreation</option>
                  <option value="education">Education</option>
                  <option value="personal">Personal Care</option>
                  <option value="household">Household Goods</option>
                </select>
              </div>
            </form>
          </div>
          <div className={styles.search}>
            <form autoComplete="off">
              <div className={styles["custom-input"]}>
                <input type="text" id="search" name="search"></input>
              </div>
            </form>
          </div>
        </div>
        <hr></hr> */}
        <div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Payee</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{`${expense.date.slice(5, 7)}-${expense.date.slice(
                    8,
                    10
                  )}-${expense.date.slice(0, 4)}`}</td>
                  <td>{expense.payee}</td>
                  <td>{expense.category}</td>
                  <td>${Number(expense.amount).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Log;
