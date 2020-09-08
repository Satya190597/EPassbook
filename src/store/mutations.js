export const mutations = {
    addTransaction: function(state,payload) {
      const {transaction,transactionId} = payload  
      transaction.id = transactionId
      state.transactions.push(transaction)
    },
    cancelTransaction: function(state,payload) {
      const {transaction,newTransactionId} = payload
      state.transactions.forEach(element => {
        if(element.id == transaction.id) {
          return element.active = false
        }
      })     
      const newTransaction = {
        id : newTransactionId,
        amount : transaction.amount,
        name: transaction.name,
        date : new Date(),
        category : transaction.category === 'Debit' ? 'Credit' : 'Debit',
        active : true,
      }
      state.transactions.push(newTransaction) 
    }
}