export const getters = {
    transactionId : (state) => {
        return (state.transactions.length+1).toString() + 'E-BANK';
    },
    transactions: (state) => {
        return state.transactions
    }
}