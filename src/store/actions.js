export const actions = {
    cancel: function(context,value) {
      context.commit(
        'cancelTransaction',
        {
          transaction:value,
          newTransactionId:context.getters.transactionId
        }
      )
    },
    add: function(context,value) {
      context.commit(
        'addTransaction',
        {
          transaction: value,
          transactionId:context.getters.transactionId
        }
      )
    }
  }