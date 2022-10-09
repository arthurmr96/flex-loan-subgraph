import { BigInt } from "@graphprotocol/graph-ts"
import {
    Lend,
    LoanCreation,
    LoanLiquidation,
    LoanPayback,
    Withdraw
} from "../generated/FlexLoanVault/FlexLoanVault"
import { Lender, Loan } from "../generated/schema"

export function handleLend(event: Lend): void {
    // Entities can be loaded from the store using a string ID; this ID
    // needs to be unique across all entities of the same type
    let entity = Lender.load(event.params.lender.toHex())

    // Entities only exist after they have been saved to the store;
    // `null` checks allow to create entities on demand
    if (!entity) {
        entity = new Lender(event.params.lender.toHex())

        // Entity fields can be set using simple assignments
        entity.amount = event.params.amount
        entity.createdAt = event.params.timestamp
        entity.updatedAt = event.params.timestamp
    }

    entity.amount = entity.amount.plus(event.params.amount)

    // Entities can be written to the store with `.save()`
    entity.save()

    // Note: If a handler doesn't require existing field values, it is faster
    // _not_ to load the entity from the store. Instead, create it fresh with
    // `new Entity(...)`, set the fields that should be updated and save the
    // entity back to the store. Fields that were not set or unset remain
    // unchanged, allowing for partial updates to be applied.

    // It is also possible to access smart contracts from mappings. For
    // example, the contract that has emitted the event can be connected to
    // with:
    //
    // let contract = Contract.bind(event.address)
    //
    // The following functions can then be called on this contract to access
    // state variables and other data:
    //
    // - contract.balance(...)
    // - contract.collectionPrice(...)
    // - contract.currentPayback(...)
    // - contract.lendedAmount(...)
    // - contract.lenders(...)
    // - contract.lendersBalance(...)
    // - contract.loans(...)
    // - contract.lockedAmount(...)
    // - contract.withdrawalAmount(...)
}

export function handleLoanCreation(event: LoanCreation): void {
    let entity = new Loan(event.params.index.toString())

    entity.borrower = event.params.borrower
    entity.amount = event.params.loanAmount
    entity.collateralTargetAddress = event.params.collateralTargetAddress
    entity.collateralTargetTokenId = event.params.collateralTargetTokenId
    entity.duration = event.params.duration
    entity.interestRate = event.params.interestRate
    entity.status = "active"
    entity.createdAt = event.params.timestamp
    entity.updatedAt = event.params.timestamp

    entity.save()
}

export function handleLoanLiquidation(event: LoanLiquidation): void {
    let entity = Loan.load(event.params.index.toString())

    if (!entity) {
        entity = new Loan(event.params.index.toString())
    }

    entity.liquidatedAmount = entity.amount
    entity.amount = BigInt.fromI32(0)
    entity.status = "liquidated"
    entity.save()

}

export function handleLoanPayback(event: LoanPayback): void {
    let entity = Loan.load(event.params.index.toString())

    if (!entity) {
        entity = new Loan(event.params.index.toString())
    }

    entity.liquidatedAmount = entity.amount
    entity.amount = BigInt.fromI32(0)
    entity.status = "paid"
    entity.save()
}

export function handleWithdraw(event: Withdraw): void {
    let entity = Lender.load(event.params.lender.toHex())

    if (!entity) {
        entity = new Lender(event.params.lender.toHex())
    }

    entity.amount = entity.amount.minus(event.params.amount)
    entity.save()
}
