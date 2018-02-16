import Account from "./Account"
import AccountManager from "./AccountManager"

const account = new Account('Benny Neugebauer')

const manager = new AccountManager()
manager.addAccount(account)

manager.printAccounts()
