import { Header } from "../../components/Header";
import { SearchForm } from "./SearchForm";
import { Summary } from "../../components/Summary";
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
const { transactions} = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>

            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
               
                  <td>{dateFormatter.format( new Date(transaction.createdAt))}</td>
                </tr>
              );
            })}

          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
