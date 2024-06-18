const accounts = [
	{ id: 1, owner: "Alice", balance: 500 },
	{ id: 2, owner: "Bob", balance: 300 }
];

function getAccountById(id) {
	for (const account of accounts) {
		if (account.id === id) {
			return account;
		}
	}
	throw new Error("Account not found");
}
function createAccount(newAccountId, newAccountOwner) {
	if (!Number.isFinite(newAccountId) || newAccountId < 0) {
		throw new Error("Invalid value for account ID: The ID must be a positive finite number.");
	}

	if (!newAccountOwner === 'String' || newAccountOwner.length === 0) {
		throw new Error("Invalid value for account owner: The owner must be string.");
	}

	if (accounts.some(account => account.id === newAccountId)) {
		throw new Error("Account ID already exists.");
	}

	if (newAccountOwner.startsWith(" ")) {
		throw new Error("Invalid value for account owner: The owner must start with a letter.");
	}

	accounts.push(
		{
			id: newAccountId,
			owner: newAccountOwner,
			balance: "0"
		}
	);
}

function depositMoney(accountId, amount) {
	const account = getAccountById(accountId);

	if (!account) {
		throw new Error("Account not found");
	}
	if (!Number.isFinite(amount) || amount <= 0) {
		throw new Error("Invalid value for deposit amount: The amount must be a positive finite number.");
	}

	account.balance += amount;
}

function withdrawMoney(accountId, amount) {
	const account = getAccountById(accountId);

	if (!account) {
		throw new Error("Account not found.");
	}

	if (!Number.isFinite(amount) || amount <= 0) {
		throw new Error("Invalid value for withdrawal amount: The amount must be a positive finite number.");
	}

	if (account.balance < amount) {
		throw new Error("Insufficient funds.");
	}

	account.balance -= amount;
}

function transferMoney(fromAccountId, toAccountId, amount) {
	const fromAccount = getAccountById(fromAccountId);
	const toAccount = getAccountById(toAccountId);

	if (!fromAccount) {
		throw new Error("Source account not found.");
	}

	if (fromAccount.balance < amount) {
		throw new Error("Insufficient funds.");
	}

	if (!Number.isFinite(amount) || amount < 0) {
		throw new Error("Invalid value for transfer amount: The amount must be a positive finite number.");
	}

	fromAccount.balance -= amount
	toAccount.balance += amount
}


// Hints:

// getAccountById('1');

// createAccount(1, "Alice");
// createAccount("3", "Charlie");
// createAccount(-3, "Charlie");
// createAccount(3, ["Charlie"]);
// createAccount(3, "");
// createAccount(3, "  ");

// depositMoney(1, "300")
// depositMoney(1, -300)
// depositMoney(1, 0)
// depositMoney(1, Infinity)
// depositMoney(4, 100)

// withdrawMoney(1, -100)
// withdrawMoney(1, 0)
// withdrawMoney(1, 501)

// transferMoney(1, 4, 100)
// transferMoney(1, 2, 501);
// transferMoney(1, 2, 100);