import Account from './Account'

class AccountManager {
  private accounts: { [index: string]: Account }

  constructor() {
    this.accounts = {}
  }

  addAccount(account: Account): void {
    this.accounts[account.getName()] = account
  }

  getAccount(name: string): Account | undefined {
    return this.accounts[name]
  }

  printAccounts(): void {
    for (const name in this.accounts) {
      const account = this.accounts[name]
      console.log(account.getName())
    }
  }
}

export default AccountManager
